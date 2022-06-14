import { getTimeValue } from "@skedulo/custom-form-controls/dist/helper";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCommon from "../CardCommon";
import { constant, setSelectedItem, setTitle, setView } from "../duck/action";
import { Job } from "../duck/type";
import "./styles.scss";
interface Props {
  job: Job;
}

const JobCard: React.FC<Props> = ({ job }) => {
  const dispatch = useDispatch();

  const onScheduleJob = () => {
    console.log("🚀 ~ file: index.tsx ~ line 13 ~ job", job);
    dispatch(setView({ view: constant.VIEW_SCHEDULE_JOB }));
    dispatch(setTitle({ title: constant.TITLE_SCHEDULE_JOB }));
    dispatch(setSelectedItem({ selectedItem: {...job, Start: getTimeValue(job.Start, job.Timezone), End: getTimeValue(job.End, job.Timezone) }}));
  };

  return (
    <div className="job-card">
      <CardCommon job={job} />
      <div className="divider"></div>
      <div className="card-footer">
        <div className="btn-text" onClick={onScheduleJob}>
          Schedule Job
        </div>
      </div>
    </div>
  );
};

export default JobCard;
