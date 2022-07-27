import axios from "axios";
import moment from "moment";
import { useCallback, useContext, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { constants } from "../constants";
import formContext from "../formContext";
import { GridInfo } from "../pages/SuggestedTimes";

const API_GET_GRID_SCHEDULE = `${constants.API_ROOT}/${constants.API_GET_GRID_SCHEDULE}`;
const GET_GRID_SCHEDULE_KEY = "GET_GRID_SCHEDULE_KEY";

const useGetGridSchedule = (available: { start: string; end: string }[], selectedItemStart: string) => {
  const context = useContext(formContext);
  const {
    main: { resourceIds },
    common,
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

  const storeProps = useSelector(({ reducer }: any) => {
    return {
      selectedItem: reducer.selectedItem,
    };
  });

  const { JobTimeConstraints } = storeProps.selectedItem;
  const StartBefore = JobTimeConstraints[0]?.StartBefore;
  const EndBefore = JobTimeConstraints[0]?.EndBefore;
  const StartAfter = JobTimeConstraints[0]?.StartAfter;

  const [count, setCount] = useState(0);
  const [gridSchedule, setGridSchedule] = useState([] as any);
  const today = useMemo(() => moment().toISOString(), []);

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

  const getAvailableCountStart = useCallback(
    (count: number, availableStart: any) => {
      let startTime = availableStart;
      if (count === 0 && moment(availableStart).isBefore(selectedItemStart)) {
        startTime = selectedItemStart;
      }
      return startTime;
    },
    [selectedItemStart]
  );

  const getGridSchedule = useCallback(async () => {
    const res = await axios.post(
      API_GET_GRID_SCHEDULE,
      {
        scheduleStart: getAvailableCountStart(
          count,
          available[count]?.start || ""
        ),
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
    return res;
  }, [
    available,
    config,
    count,
    getAvailableCountStart,
    resourceIds,
    storeProps.selectedItem.Duration,
    storeProps.selectedItem.GeoLatitude,
    storeProps.selectedItem.GeoLongitude,
  ]);

  const { isLoading: getGridScheduleLoading, refetch: refetchGridSchedule } =
    useQuery(GET_GRID_SCHEDULE_KEY, getGridSchedule, {
      enabled: available.length !== 0 && !!available[count],
      onSuccess: (data) => {
        const validResult = data.data.url.result.filter((item: GridInfo) => {
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
          return [...prev, ...matchJCTResult];
        });
      },
    });
  return { gridSchedule, getGridScheduleLoading, refetchGridSchedule };
};

export default useGetGridSchedule;
