import { Loading } from "@skedulo/custom-form-controls/dist/controls";
import React, { useState } from "react";
import { Job } from "../../components/duck/type";
import EmptyJob from "../../components/EmptyJob";
import JobCard from "../../components/JobCard";
import formContext from "../../formContext";
import "./styles.scss";
import useGetJobs from "../../hooks/useGetJobs";

//view console in mobile
declare global {
  interface Window {
    jobs: any;
    widgetss: any;
    authData: any;
    errorGetJob: any;
  }
}

const MyJobs = () => {
  const context = React.useContext(formContext);
  const {
    main: { resourceIds },
  } = context;
  const [listJobs, setListJobs] = useState<Job[]>([]);
  function onGetJobsSuccess(jobs: Job[]) {
    if (jobs.length > 0) {
      const filteredJob = jobs.filter(function (element: Job) {
        return element.JobAllocations.some(function (subElement: {
          ResourceId: string;
          UID: string;
          Status: string;
          JobId: string;
        }) {
          return (
            subElement.ResourceId === `${resourceIds[0]}` &&
            subElement.Status !== "Deleted" &&
            subElement.Status !== "Declined"
          );
        });
      });
      if (filteredJob.length > 0) {
        setListJobs(filteredJob.splice(0, 30));
      }
    }
  }
  const { getJobsLoading } = useGetJobs(
    {
      filterJob: `Start == null AND JobStatus != 'Cancelled' AND Locked == false`,
      orderBy: "CreatedDate DESC",
    },
    onGetJobsSuccess
  );

  return (
    <div className="my-jobs">
      {getJobsLoading && <Loading loading={getJobsLoading} />}
      {listJobs.length === 0 && <EmptyJob />}
      {listJobs.length > 0 &&
        listJobs.map((job: Job) => <JobCard job={job} key={job.UID}></JobCard>)}
    </div>
  );
};

export default MyJobs;
