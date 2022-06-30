import React from "react";

import { formatDate, toHoursAndMinutes } from "../../utills";
import { Job } from "../duck/type";
import TagLabel from "../TagLabel";
import './styles.scss';

interface Props {
  job: Job;
}

const CardCommon: React.FC<Props> = ({ job }) => {
  const {
    Description,
    Duration,
    Address,
    Contact,
    Urgency,
    JobTimeConstraints,
    JobStatus,
    Timezone,
  } = job;
  
  return (
    <div className="common-card">
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
      {JobTimeConstraints[0]?.StartBefore && (
        <div className="normal-text">
          Start before {formatDate(JobTimeConstraints[0].StartBefore, Timezone)}
        </div>
      )}

      {JobTimeConstraints[0]?.StartAfter && (
        <div className="normal-text">
          Start after {formatDate(JobTimeConstraints[0].StartAfter, Timezone)}
        </div>
      )}

      {JobTimeConstraints[0]?.EndBefore && (
        <div className="normal-text">
          End before {formatDate(JobTimeConstraints[0].EndBefore, Timezone)}
        </div>
      )}

      <div className="tag-label-wrapper">
        {JobStatus && (
          <TagLabel label={JobStatus} className="job-status"></TagLabel>
        )}
        {Urgency && <TagLabel label={Urgency} className="urgency"></TagLabel>}
      </div>
    </div>
  );
};

export default CardCommon;
