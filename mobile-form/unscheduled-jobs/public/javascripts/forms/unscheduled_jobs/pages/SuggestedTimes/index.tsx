import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
//@ts-ignore
import CheckIcon from "../../images/Shape.png";
import {
  setEnableSaveSlot,
  setSelectedItem,
  setSlotSelected,
} from "../../components/duck/action";
import { isEmpty, isEqual } from "lodash";
import { Loading } from "@skedulo/custom-form-controls/dist/controls";
import useGetAvailableResource from "../../hooks/useGetAvailableResource";
import useGetGridSchedule from "../../hooks/useGetGridSchedule";

export interface GridInfo {
  availableResources: string[];
  start: string;
  end: string;
}
interface SlotInfo {
  date: string;
  start: string;
  end: string;
  startOrigin: string;
  endOrigin: string;
}

const SuggestedTimes = () => {
  const dispatch = useDispatch();
  const storeProps = useSelector(({ reducer }: any) => {
    return {
      selectedItem: reducer.selectedItem,
      slotSelected: reducer.slotSelected,
    };
  });

  const [available, setAvailable] = useState<{ start: string; end: string }[]>(
    []
  );

  const selectedItemStart = storeProps.selectedItem.Start as string;
  const currentDateStart = useMemo(
    () =>
      selectedItemStart
        ? selectedItemStart
        : moment().startOf("day").toISOString(),
    [selectedItemStart]
  );
  const currentDateEnd = useMemo(
    () =>
      selectedItemStart
        ? moment(selectedItemStart).add(2, "months").endOf("day").toISOString()
        : moment().add(2, "months").endOf("day").toISOString(),
    [selectedItemStart]
  );

  const handleAvailableSuccess = (data) => {
    const result = data.data.url?.result;
    const resourceInfo = Object.values(result) as any;
    if (resourceInfo[0].available.length !== 0) {
      setAvailable(resourceInfo[0].available);
    }
  };
  const { getAvailableResourceLoading } = useGetAvailableResource(
    currentDateStart,
    currentDateEnd,
    true,
    handleAvailableSuccess
  );

  const todayFormated = moment().format("dddd, MMMM DD");

  const { gridSchedule, getGridScheduleLoading } = useGetGridSchedule(
    available,
    selectedItemStart
  );

  const dateTimeArr = gridSchedule.map((item: GridInfo) => {
    return {
      start: moment(item.start).format("HH:mma"),
      end: moment(item.end).format("HH:mma"),
      date: moment(item.start).format("dddd, MMMM DD"),
      startOrigin: item.start,
      endOrigin: item.end,
    };
  });

  function groupBy(objectArray: SlotInfo[], property: string) {
    return objectArray
      .slice(0, 30)
      .reduce(function (acc: SlotInfo, obj: SlotInfo) {
        let key = obj[property];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
      }, {} as SlotInfo);
  }
  const newDateTimeArr = groupBy(dateTimeArr, "date");

  const [selectedSlot, setSelectedSlot] = useState(
    storeProps.slotSelected
      ? storeProps.slotSelected
      : { start: "", end: "", date: "" }
  );

  const selectSlot = (
    start: string,
    end: string,
    date: string,
    startOrigin: string,
    endOrigin: string
  ) => {
    setSelectedSlot({ start: start, end: end, date: date });
    dispatch(
      setSelectedItem({
        selectedItem: {
          ...storeProps.selectedItem,
          Start: startOrigin,
          End: endOrigin,
        },
      })
    );
    dispatch(
      setSlotSelected({
        slotSelected: {
          ...storeProps.slotSelected,
          start: start,
          end: end,
          date: date,
        },
      })
    );
  };

  useEffect(() => {
    if (storeProps.slotSelected?.start) {
      dispatch(setEnableSaveSlot({ isEnableSuggest: true }));
    } else {
      dispatch(setEnableSaveSlot({ isEnableSuggest: false }));
    }
  }, [dispatch, selectedSlot.start, storeProps.slotSelected?.start]);

  return (
    <>
      {(getAvailableResourceLoading || getGridScheduleLoading) && (
        <Loading
          loading={getAvailableResourceLoading || getGridScheduleLoading}
        />
      )}
      {isEmpty(newDateTimeArr) ? (
        <div className="empty-list">
          <div className="empty-msg">
            There is no availability matching the Job requirements
          </div>
        </div>
      ) : (
        <div className="suggest-list">
          {React.Children.toArray(
            Object.entries(newDateTimeArr).map(
              ([key, value]: [string, SlotInfo[]]) => {
                return (
                  <div className="suggest-item">
                    <div className="suggest-item-title">
                      {isEqual(todayFormated, key) ? "Today" : key}
                    </div>
                    {React.Children.toArray(
                      value.map((item: SlotInfo) => (
                        <div
                          className="suggest-item-time"
                          onClick={() =>
                            selectSlot(
                              item.start,
                              item.end,
                              key,
                              item.startOrigin,
                              item.endOrigin
                            )
                          }
                        >
                          <label htmlFor="">
                            {item.start} - {item.end}
                          </label>
                          {selectedSlot.start === item.start &&
                            selectedSlot.end === item.end &&
                            selectedSlot.date === key && (
                              <img src={CheckIcon} alt="CheckIcon" />
                            )}
                        </div>
                      ))
                    )}
                  </div>
                );
              }
            )
          )}
        </div>
      )}
    </>
  );
};

export default SuggestedTimes;
