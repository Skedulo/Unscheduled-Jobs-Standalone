import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCommon from "../../components/CardCommon";
//@ts-ignore
import RightIcon from "../../images/right.png";
import "./styles.scss";
import {
  controls,
  helper,
  constant as ct,
} from "@skedulo/custom-form-controls";
import { Textbox } from "@skedulo/custom-form-controls/dist/controls";
import moment from "moment-timezone";

const ScheduleJob = () => {
  const dispatch = useDispatch();
  const storeProps = useSelector(({ reducer }: any) => {
    return {
      selectedItem: reducer.selectedItem,
    };
  });
  console.log("storeProps :>> ", storeProps);
  const {
    SkedControl,
    Lookup2,
    PopUp,
    ButtonGroup,
    StickyButton,
    Counter,
    SkedSignaturePanel,
    ProgressBar,
    DateTimeSelect,
    Loading,
    PhotoModal,
  } = controls;

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [hideDatePlaceholder, setHideDatePlaceholder] = useState(false);
  const [hideTimePlaceholder, setHideTimePlaceholder] = useState(false);

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  const onDateChange = (val: any) => {
    console.log('event.target.value :>> ', val);
    setDate(val);
  };

  const onTimeChange = (val: any) => {
    setTime(val);
  }


  return (
    <>
      <div className="schedule-job">
        <div className="add-date-time">
          <CardCommon job={storeProps.selectedItem}></CardCommon>
        </div>
        <div className="add-date-time">
          <div className="title">Add date/time</div>
          <div className="select-item">
            <div className="label-item">Date</div>
            <div className="select-wrapper">
              <label
                className={`input-placeholder ${date !== "" ? "hide" : "show"}`}
              >
                Select date
              </label>
              <input
                type="date"
                value={date}
                min={moment().format("YYYY-MM-DD")}
                placeholder="Select date"
                className="date-input"
                onChange={(event) => onDateChange(event.target.value)}
                onBlur={(event) => onDateChange(event.target.value)}
              ></input>
               <img src={RightIcon} alt="" />
            </div>
           
          </div>
          <div className="divider"></div>

          <div className="select-item">
            <div className="label-item">Time</div>
            <div className="select-wrapper">
            <label
              className={`input-placeholder ${time !== "" ? "hide" : "show"}`}
            >
              Select time
            </label>
            <input
              type="time"
              placeholder="Select time"
              className="date-input"
              onChange={(event) => onTimeChange(event.target.value)}
              onBlur={(event) => onTimeChange(event.target.value)}
            ></input>
          </div>
          </div>
        </div>
        <div className="add-date-time footer-btn">
          <button className="suggest-btn" type="submit">
            <div>See suggested times</div>
          </button>
        </div>
        <div className="page-note">
          View your agenda to see where this job could be scheduled
        </div>
      </div>
    </>
  );
};

export default ScheduleJob;
