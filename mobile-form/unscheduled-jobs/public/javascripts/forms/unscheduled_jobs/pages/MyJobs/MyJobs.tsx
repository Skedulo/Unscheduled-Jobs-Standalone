import React from 'react';
import { useSelector } from 'react-redux';
import { Job } from '../../components/duck/type';
import EmptyJob from '../../components/EmptyJob';
import JobCard from '../../components/JobCard';
import './styles.scss';

const MyJobs = () => {
    const {
        jobs
      } = useSelector(({ reducer }: any) => {
        return {
            jobs: reducer.jobs
        }
      })
  return (
    <div className="my-jobs">
        {jobs.length > 0 ? jobs.map((job: Job) =>  <JobCard job={job} key={job.UID}></JobCard>): <EmptyJob/>}
    </div>
  
  )
}

export default MyJobs