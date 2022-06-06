import React from "react";
import { formatDate, toHoursAndMinutes } from "../../utills";
import { Job } from "../duck/type";
import TagLabel from "../TagLabel";
import "./styles.scss";

interface Props {
  job: Job;
}

const JobCard: React.FC<Props> = ({ job }) => {
  const {
    Description,
    Duration,
    Address,
    Contact,
    Urgency,
    JobTimeConstraints,
    JobStatus,
  } = job;

  return (
    <div className="job-card">
      <div className="description">{Description}</div>
      {Duration && (
        <div className="normal-text duration">
          {toHoursAndMinutes(Duration)}
        </div>
      )}
      {Contact?.FullName && (
        <div className="normal-text">{Contact.FullName}</div>
      )}
      {Address && <div className="normal-text">{Address}</div>}
      {JobTimeConstraints[0]?.EndBefore && (
        <div className="normal-text">
          End before {formatDate(JobTimeConstraints[0].EndBefore)}
        </div>
      )}
      {JobTimeConstraints[0]?.StartAfter && (
        <div className="normal-text">
          Start after {formatDate(JobTimeConstraints[0].StartAfter)}
        </div>
      )}
      {JobTimeConstraints[0]?.StartBefore && (
        <div className="normal-text">
          Start before {formatDate(JobTimeConstraints[0].StartBefore)}
        </div>
      )}
      <div className="tag-label-wrapper">
        {JobStatus && (
          <TagLabel label={JobStatus} className="job-status"></TagLabel>
        )}
        {Urgency && <TagLabel label={Urgency} className="urgency"></TagLabel>}
      </div>
      <hr />
      <div className="btn-text">Schedule Job</div>
    </div>
  );
};

export default JobCard;
