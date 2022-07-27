import React from 'react';
import {useQuery} from 'react-query';
import { Job } from '../components/duck/type';
import {constants} from '../constants';
import formContext from '../formContext';
import { queryJob } from '../query';

interface QueryParams {
    filterJob: string;
    orderBy?: string;
}

const useGetJobs = (variables: QueryParams, onSuccess: (data: Job[]) => void, enabled?: boolean) => {
    const context = React.useContext(formContext);
    const {
      widgets,
    } = context;

    async function getJobs() {
        const {jobs} = await widgets.GraphQL({
          query: queryJob,
          variables,
        });
        return jobs;
      }
    
    const {data: jobs, isLoading: getJobsLoading} = useQuery(constants.GET_JOBS_KEY,  getJobs, {
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (error: unknown) => {
            console.log('error', error);
        },
        enabled: enabled
    });
    return {jobs, getJobsLoading };
};

export default useGetJobs;
