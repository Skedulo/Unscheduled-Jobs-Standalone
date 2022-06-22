import { Loading } from "@skedulo/custom-form-controls/dist/controls";
import React, { useEffect, useState } from "react";
import { Job } from "../../components/duck/type";
import EmptyJob from "../../components/EmptyJob";
import JobCard from "../../components/JobCard";
import formContext from "../../formContext";
import { queryJob } from "../../query";
import "./styles.scss";

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
    widgets,
    main: { resourceIds },
    common: {
      authData
    }
  } = context;
  const [listJobs, setListJobs] = useState<Job[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(false);

  useEffect(() => {
    const getJobs = () => {
      window.widgetss=widgets;
      window.authData = authData;
      setShowLoading(true);
       widgets.GraphQL({
          query: queryJob,
          variables: {
            filterJob: `Start == null AND JobStatus != 'Cancelled' AND Locked == false`,
            orderBy: "CreatedDate DESC",
          },
        })
        .then(({ jobs }: any) => {
          window.jobs=jobs;
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
          const filteredJobsLimit = filteredJob.splice(0, 30);
          if (filteredJobsLimit.length !== 0) {
            setListJobs(filteredJobsLimit);
          }
          setShowLoading(false);
        }).catch((e: any) => {
          window.errorGetJob = e;
            getJobs();
        });
    };
    getJobs();
  }, [widgets.GraphQL, resourceIds, setListJobs, widgets, authData]);
  // view console in mobile

  return (
    <div className="my-jobs">
      {showLoading && <Loading loading={showLoading} />}
      {listJobs.length > 0 ? (
        listJobs.map((job: Job) => <JobCard job={job} key={job.UID}></JobCard>)
      ) : (
        <EmptyJob />
      )}
    </div>
  );
};

export default MyJobs;
