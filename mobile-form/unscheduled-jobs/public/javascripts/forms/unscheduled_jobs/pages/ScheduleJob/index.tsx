import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCommon from "../../components/CardCommon";
//@ts-ignore
import RightIcon from "../../images/right.png";
import "./styles.scss";
import moment from "moment-timezone";
import { setEnableSave, setSelectedItem } from "../../components/duck/action";

const ScheduleJob = () => {
  const dispatch = useDispatch();
  const storeProps = useSelector(({ reducer }: any) => {
    return {
      selectedItem: reducer.selectedItem,
      
    };
  });

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const onDateChange = (val: any) => {
    setDate(val);
  };

  const onTimeChange = (val: any) => {
    setTime(val);
  };

  const [isInValid, setIsInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const { JobTimeConstraints, Duration} = storeProps.selectedItem;

    const StartBefore = JobTimeConstraints[0]?.StartBefore;
    const EndBefore = JobTimeConstraints[0]?.EndBefore;
    const StartAfter = JobTimeConstraints[0]?.StartAfter;

    const startLocal = moment(date + time, "YYYY-MM-DD HH:mm").toISOString();
    const endLocal = moment(date + time, "YYYY-MM-DD HH:mm").add(Duration, 'minutes').toISOString();

    const today = moment().toISOString();

    //selectDate > StartAfter
    const isValidStartAfter =
      !StartAfter ||
      (StartAfter && moment(startLocal).isAfter(StartAfter));
    //selectDate < EndBefore
    const isValidEndBefore =
      !EndBefore || (EndBefore && moment(startLocal).isBefore(EndBefore));
    //Present <= selectedDate < StartBefore
    const isValidStartBefore =
      !StartBefore ||
      (StartBefore && moment(today).isSameOrBefore(startLocal) && moment(startLocal).isBefore(StartBefore));

    if(date == '' || time == '') {
      dispatch(setEnableSave({isEnable: false}))
    } else if (moment(startLocal).isBefore(today)) {
      dispatch(setEnableSave({isEnable: false}))
      setIsInvalid(true);
      setErrorMsg("Date and time must not be in the past");
    }
    else if(date !== "" && time !== "" && (!isValidStartAfter || !isValidEndBefore || !isValidStartBefore)) {
      dispatch(setEnableSave({isEnable: false}))
      setIsInvalid(true);
      setErrorMsg("Date and time must comply with Job Time Constraints");
    }
    else {
      dispatch(setEnableSave({isEnable: true}))
      setIsInvalid(false);
      setErrorMsg("");
      dispatch(
        setSelectedItem({
          selectedItem: {
            ...storeProps.selectedItem,
            Start: (date && time) ? startLocal : "",
            End: (date && time) ? endLocal : "",
          },
        })
      );
    }
  }, [
    date,
    time,
    storeProps.selectedItem.JobTimeConstraints,
    storeProps.selectedItem.Duration,
  ]);

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
           
            <div className="input-wrapper">
              <div className={`select-label ${date !== "" ? "hide" : "show"}`}>
                <label htmlFor="" className="placeholder">
                  Select date
                </label>
                <img src={RightIcon} alt="" />
              </div>
              <input
                type="date"
                value={date}
                onChange={(event) => onDateChange(event.target.value)}
                onBlur={(event) => onDateChange(event.target.value)}
                className={`date-input ${isInValid ? "invalid-input" : ""} ${
                  date !== "" ? "hide-input" : "show-input"
                }`}
              />
              <br />
              {errorMsg !== "" && <div className="error-msg">{errorMsg}</div>}
            </div>
          </div>
          <div className="divider"></div>

          <div className="select-item">
            <div className="label-item">Time</div>
         
            <div className="input-wrapper">
              <div className={`select-label ${time !== "" ? "hide" : "show"}`}>
                <label htmlFor="" className="placeholder">
                  Select time
                </label>
                <img src={RightIcon} alt="" />
              </div>
              <input
                type="time"
                value={time}
                onChange={(event) => onTimeChange(event.target.value)}
                onBlur={(event) => onTimeChange(event.target.value)}
                className={`date-input ${isInValid ? "invalid-input" : ""} ${
                  time !== "" ? "hide-input" : "show-input"
                }`}
              />
              {errorMsg !== "" && <div className="error-msg">{errorMsg}</div>}
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
