import axios from "axios";
import moment from "moment";
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constants } from "../../constants";
import formContext from "../../formContext";
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

interface GridInfo {
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

const useGetAvailableResource = (
  token: string,
  resourceId: string,
  startDate: string,
  endDate: string
) => {
  const config = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
        ["Content-Type"]: `application/json`,
      },
    }),
    [token]
  );
  const API_GET_AVAILABLE_RESOURCE = `${constants.API_ROOT}/${constants.API_GET_AVAILABLE_RESOURCE}`;

  const [available, setAvailable] = useState<{ start: string; end: string }[]>(
    []
  );

  const getAvailableResource = useCallback(
    async (startDate: string, endDate: string) => {
      try {
        const res = await axios.post(
          API_GET_AVAILABLE_RESOURCE,
          {
            start: startDate,
            end: endDate,
            resourceIds: [resourceId],
            availability: true,
            unavailability: true,
          },
          config
        );
        if (res.status === constants.SUCCESS_CODE) {
          const result = res.data.url?.result;
          const resourceInfo = Object.values(result) as any;
          if (resourceInfo[0].available.length !== 0) {
            setAvailable(resourceInfo[0].available);
          }
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    [config, resourceId]
  );

  useEffect(() => {
    getAvailableResource(startDate, endDate);
  }, [getAvailableResource, startDate, endDate]);

  return { available, refetch: getAvailableResource };
};

const SuggestedTimes = () => {
  const [showLoading, setShowLoading] = useState(true);
  const context = React.useContext(formContext);
  const storeProps = useSelector(({ reducer }: any) => {
    return {
      selectedItem: reducer.selectedItem,
      slotSelected: reducer.slotSelected,
    };
  });
  const dispatch = useDispatch();
  const {
    common,
    main: { resourceIds },
  } = context;
  const token = useMemo(
    () =>
      common.authData.skeduloAccess.token
        ? common.authData.skeduloAccess.token
        : constants.sessionToken,
    [common.authData.skeduloAccess.token]
  );

  const config = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
        ["Content-Type"]: `application/json`,
      },
    }),
    [token]
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

  const { available, refetch } = useGetAvailableResource(
    token,
    resourceIds[0],
    currentDateStart,
    currentDateEnd
  );

  const today = useMemo(() => moment().toISOString(), []);
  const todayFormated = moment().format("dddd, MMMM DD");

  const [gridSchedule, setGridSchedule] = useState([] as any);
  const [count, setCount] = useState(0);

  const { JobTimeConstraints } = storeProps.selectedItem;
  const StartBefore = JobTimeConstraints[0]?.StartBefore;
  const EndBefore = JobTimeConstraints[0]?.EndBefore;
  const StartAfter = JobTimeConstraints[0]?.StartAfter;

  //selectDate > StartAfter
  const isValidStartAfter = useCallback(
    (scheduleStart: string) => {
      return (
        !StartAfter || (StartAfter && moment(scheduleStart).isAfter(StartAfter))
      );
    },
    [StartAfter]
  );

  const isValidEndBefore = useCallback(
    (scheduleStart: string) => {
      return (
        !EndBefore || (EndBefore && moment(scheduleStart).isBefore(EndBefore))
      );
    },
    [EndBefore]
  );

  const isValidStartBefore = useCallback(
    (scheduleStart: string) => {
      return (
        !StartBefore ||
        (StartBefore &&
          moment(today).isSameOrBefore(scheduleStart) &&
          moment(scheduleStart).isBefore(StartBefore))
      );
    },
    [StartBefore, today]
  );

  const isNotInPast = useCallback(
    (scheduleStart: string) => {
      return moment(today).isBefore(scheduleStart);
    },
    [today]
  );

  const API_GET_GRID_SCHEDULE = `${constants.API_ROOT}/${constants.API_GET_GRID_SCHEDULE}`;

  const getAvailableCountStart = useCallback((count: number, availableStart: any) => {
    let startTime = availableStart;
    if (count === 0 && moment(availableStart).isBefore(selectedItemStart)) {
      startTime = selectedItemStart;
    }
    return startTime;
  }, [selectedItemStart]);

  useEffect(() => {
    async function getGridSchedule() {
      try {
        const res = await axios.post(
          API_GET_GRID_SCHEDULE,
          {
            scheduleStart: getAvailableCountStart(count, available[count]?.start || ""),
            scheduleEnd: available[count]?.end || "",
            resourceIds: [resourceIds[0]],
            job: {
              location: {
                lat: storeProps.selectedItem.GeoLatitude,
                lng: storeProps.selectedItem.GeoLongitude,
              },
            },
            gridSize: storeProps.selectedItem.Duration * 60,
          },
          config
        );
        if (res.status === constants.SUCCESS_CODE) {
          const validResult = res.data.url.result.filter((item: GridInfo) => {
            return item.availableResources.includes(resourceIds[0]);
          });
          const matchJCTResult = validResult.filter((item: any) => {
            return (
              isValidStartAfter(item.start) &&
              isValidStartBefore(item.start) &&
              isValidEndBefore(item.start) &&
              isNotInPast(item.start)
            );
          });

          setGridSchedule((prev: any) => {
            if ([...prev, ...matchJCTResult].length < 30) {
              setCount((prev) => prev + 1);
            }
            setShowLoading(false);
            return [...prev, ...matchJCTResult];
          });
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
    }

    if (available.length !== 0 && available[count]) {
      getGridSchedule();
    }
  }, [
    available,
    config,
    count,
    isNotInPast,
    isValidEndBefore,
    isValidStartAfter,
    isValidStartBefore,
    resourceIds,
    storeProps.selectedItem.GeoLatitude,
    storeProps.selectedItem.GeoLongitude,
    storeProps.selectedItem.Duration,
    getAvailableCountStart
  ]);


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
      {showLoading ? (
        <Loading loading={showLoading} />
      ) : isEmpty(newDateTimeArr) ? (
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
          )}{" "}
        </div>
      )}
    </>
  );
};

export default SuggestedTimes;
