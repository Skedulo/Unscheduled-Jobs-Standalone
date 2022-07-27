import { Loading } from "@skedulo/custom-form-controls/dist/controls";
import React, { useState } from "react";
import { Job } from "../../components/duck/type";
import EmptyJob from "../../components/EmptyJob";
import JobCard from "../../components/JobCard";
import formContext from "../../formContext";
import { queryJob } from "../../query";
import "./styles.scss";
import { useQuery } from "react-query";

//view console in mobile
declare global {
  interface Window {
    jobs: any;
    widgetss: any;
    authData: any;
    errorGetJob: any;
  }
}

const GET_JOBS = "GET_JOBS";

const MyJobs = () => {
  const context = React.useContext(formContext);
  const {
    widgets,
    main: { resourceIds },
    common: { authData },
  } = context;
  const [listJobs, setListJobs] = useState<Job[]>([]);

  async function getJobs() {
    const result = await widgets.GraphQL({
      query: queryJob,
      variables: {
        filterJob: `Start == null AND JobStatus != 'Cancelled' AND Locked == false`,
        orderBy: "CreatedDate DESC",
      },
    });
    return result;
  }
  const { isLoading } = useQuery(GET_JOBS, getJobs, {
    onSuccess: (data) => {
      if (data?.jobs.length > 0) {
        const filteredJob = data?.jobs.filter(function (element: Job) {
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
    },
    onError: (error: any) => {
      console.log("err :>> ", error);
    },
  });

  return (
    <div className="my-jobs">
      {isLoading && <Loading loading={isLoading} />}
      {listJobs.length === 0 && <EmptyJob />}
      {listJobs.length > 0 &&
        listJobs.map((job: Job) => <JobCard job={job} key={job.UID}></JobCard>)}
    </div>
  );
};

export default MyJobs;
