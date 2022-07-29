import axios from "axios";
import { useCallback, useContext, useMemo } from "react";
import { useQuery } from "react-query";
import { constants } from "../constants";
import formContext from "../formContext";

const API_GET_AVAILABLE_RESOURCE = `${constants.API_ROOT}/${constants.API_GET_AVAILABLE_RESOURCE}`;
const useGetAvailableResource = (key: string, startDate: string, endDate: string, isEnableCall: boolean, onSuccess: any) => {
  const context = useContext(formContext);
  const {
    main: { resourceIds },
    common,
  } = context;
  const resourceId = resourceIds[0] as TimeRanges;
  
  const token = common.authData.skeduloAccess.token
    ? common.authData.skeduloAccess.token
    : constants.sessionToken;

  const config = useMemo(
    () => ({
      headers: {
        Authorization: `Bearer ${token}`,
        ["Content-Type"]: `application/json`,
      },
    }),
    [token]
  );

  const getAvailableResource = useCallback(async () => {
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
    return res;
  }, [config, endDate, resourceId, startDate]);

  const {
    isLoading: getAvailableResourceLoading,
    refetch: refetchAvailableResource,
    data: availableResource,
    isSuccess: isGetAvailableResourceSuccess,
    isError: isGetAvailableResourceError,
    isFetching: fetchingAvailableResource
  } = useQuery(key, getAvailableResource, {
    enabled: isEnableCall,
    onSuccess: (data) => {
        onSuccess(data);
    },
    onError: (error) => {
        console.log(error);
    }
  });

  return {
    getAvailableResourceLoading,
    refetchAvailableResource,
    availableResource,
    isGetAvailableResourceSuccess,
    isGetAvailableResourceError,
    fetchingAvailableResource
  };
};

export default useGetAvailableResource;
