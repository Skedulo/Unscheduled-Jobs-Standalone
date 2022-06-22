import axios from "axios";
import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constants } from "../../constants";
import formContext from "../../formContext";
import "./styles.scss";
//@ts-ignore
import CheckIcon from "../../images/Shape.png";
import {  setEnableSaveSlot, setSelectedItem } from "../../components/duck/action";
import { isEmpty } from "lodash";

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
  endOrigin: string
}

const SuggestedTimes = () => {
  const context = React.useContext(formContext);
  const storeProps = useSelector(({ reducer }: any) => {
    return {
      selectedItem: reducer.selectedItem,
    };
  });
  const dispatch = useDispatch();
  const {
    common,
    main: { resourceIds },
  } = context;
  const token = useMemo(() => common.authData.skeduloAccess.token
    ? common.authData.skeduloAccess.token
    : constants.sessionToken, [common.authData.skeduloAccess.token]);

  const config = useMemo(() => ({
    headers: {
      Authorization: `Bearer ${token}`,
      ["Content-Type"]: `application/json`,
    }}),[token]
  );

  const today =  moment().toISOString();

  const scheduleStart = storeProps.selectedItem.Start ? storeProps.selectedItem.Start : moment().toISOString();

  const [gridSchedule, setGridSchedule] = useState({
    grid: [] as any,
  });
  const [startTime, setStartTime] = useState(scheduleStart);

  const {JobTimeConstraints} = storeProps.selectedItem;
  const StartBefore = JobTimeConstraints[0]?.StartBefore;
  const EndBefore = JobTimeConstraints[0]?.EndBefore;
  const StartAfter = JobTimeConstraints[0]?.StartAfter;

    //selectDate > StartAfter
    const isValidStartAfter = (scheduleStart: string) => {
return !StartAfter ||
(StartAfter && moment(scheduleStart).isAfter(StartAfter));
    };
    
  //selectDate < EndBefore
  const isValidEndBefore = (scheduleStart: string) => {
    return  !EndBefore || (EndBefore && moment(scheduleStart).isBefore(EndBefore));
  };

  const isValidStartBefore = (scheduleStart: string) => {
    return !StartBefore ||
    (StartBefore && moment(today).isSameOrBefore(scheduleStart) && moment(scheduleStart).isBefore(StartBefore));
  };

  useEffect(() => {
    async function getGridSchedule () {
      try {
        const res = await axios.post(
          constants.API_GET_GRID_SCHEDULE,
          {
            scheduleStart: startTime,
            scheduleEnd: moment(startTime).add(7, "days").toISOString(),
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
          }
          );
          const matchJCTResult = validResult.filter((item: any) => {
            return  isValidStartAfter(item.start) && isValidStartBefore(item.start) && isValidEndBefore(item.start);
          });
          setGridSchedule((prevState) => {
            const newGrid = [...prevState.grid, ...matchJCTResult];
            return ({
              grid: newGrid,
            });
          });
        }
      } catch (error) {
        console.log("error :>> ", error);
      }
    }
    
    getGridSchedule();
  }, [resourceIds, storeProps.selectedItem.Duration, storeProps.selectedItem.GeoLatitude, storeProps.selectedItem.GeoLongitude, startTime, config]);
  
  useEffect(()=> {
    console.log("gridSchedule.grid.length", gridSchedule.grid.length);
    if(gridSchedule.grid.length < 30){
      setStartTime((prevStartTime: string) => moment(prevStartTime).add(7, "days").toISOString());
    }
  }, [gridSchedule.grid.length]);

  const dateTimeArr = gridSchedule.grid.map((item: GridInfo) => {
    return {
      start: moment(item.start).format("HH:mma"),
      end: moment(item.end).format("HH:mma"),
      date: moment(item.start).format("dddd, MMMM DD"),
      startOrigin: item.start,
      endOrigin: item.end
    };
  });

  function groupBy(objectArray: SlotInfo[], property: string) {
    return objectArray.reduce(function (acc: SlotInfo, obj: SlotInfo) {
      let key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {} as SlotInfo);
  }
  const newDateTimeArr = groupBy(dateTimeArr, "date");

  const [selectedSlot, setSelectedSlot] = useState({
    start: "",
    end: "",
    date: "",
  });

  const selectSlot = (start: string, end: string, date: string, startOrigin: string, endOrigin: string) => {
  // console.log("🚀 ~ file: index.tsx ~ line 125 ~ selectSlot ~ start", start);
    setSelectedSlot({ start: start, end: end, date: date });
    // console.log('start :>> ', moment(date + start, "YYYY-MM-DD HH:mm").toISOString());
    dispatch(
      setSelectedItem({
        selectedItem: {
          ...storeProps.selectedItem,
          Start: startOrigin,
          End: endOrigin,
        },
      })
    );
  };

  useEffect(() => {
    if (selectedSlot.start) {
      dispatch(setEnableSaveSlot({ isEnableSuggest: true }));
    }
  }, [dispatch, selectedSlot.start]);

  return (
    <>
    {isEmpty(newDateTimeArr) ? <div className="empty-list">
        <div className='empty-msg'>There is no availability matching the Job requirements</div>

        </div> : <div className="suggest-list">{React.Children.toArray(Object.entries(newDateTimeArr).map(
        ([key, value]: [string, SlotInfo[]]) => {
          return (
            <div className="suggest-item">
              <div className="suggest-item-title">{key}</div>
              {React.Children.toArray(value.map((item: SlotInfo) => (
                <div
                  className="suggest-item-time"
                  onClick={() => selectSlot(item.start, item.end, key, item.startOrigin, item.endOrigin)}
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
              )))}
            </div>
          );
        }
      ))} </div>}
    </>   
  );
};

export default SuggestedTimes;
