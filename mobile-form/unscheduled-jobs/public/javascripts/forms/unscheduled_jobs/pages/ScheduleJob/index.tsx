import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCommon from "../../components/CardCommon";

import "./styles.scss";

const ScheduleJob = () => {
  const dispatch = useDispatch();
  const storeProps = useSelector(({ reducer }: any) => {
    return {
      selectedItem: reducer.selectedItem,
    };
  });
  console.log("storeProps :>> ", storeProps);

  return (
    <div className="schedule-job">
      <div className="job-card">
        <CardCommon job={storeProps.selectedItem}></CardCommon>
      </div>
      <div className="job-card add-date-time">
        <div className="title">Add date/time</div>
        <div className="select-item">
          <div className="label">Date</div>
          <div className="select-label">Select date</div>
        </div>
        <hr />
        <div className="select-item">
          <div className="label">Time</div>
          <div className="select-label">
            Select time
            <div className="select-btn">
              <i className="sk sk-chevron-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleJob;
