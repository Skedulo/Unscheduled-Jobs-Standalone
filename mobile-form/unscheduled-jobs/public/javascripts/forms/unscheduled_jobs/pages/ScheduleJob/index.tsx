import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCommon from "../../components/CardCommon";
//@ts-ignore
import RightIcon from "../../images/right.png";
import "./styles.scss";
import moment from "moment-timezone";
import {
  setEnableSave,
  setSelectedItem,
  setTitle,
  constant,
  setView,
} from "../../components/duck/action";
import { constants } from "../../constants";

const ScheduleJob = () => {
  const dispatch = useDispatch();
  const storeProps = useSelector(({ reducer }: any) => {
    return {
      selectedItem: reducer.selectedItem,
    };
  });
  const { JobTimeConstraints, Duration } = storeProps.selectedItem;
  const StartBefore = JobTimeConstraints[0]?.StartBefore;
  const EndBefore = JobTimeConstraints[0]?.EndBefore;
  const StartAfter = JobTimeConstraints[0]?.StartAfter;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isInValid, setIsInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const onDateChange = useCallback((val: string) => {
    setDate(val);
  }, []);
  const onTimeChange = useCallback((val: string) => {
    setTime(val);
  }, []);

  const updateSelectedItem = useCallback(
    async (startLocal: string, endLocal: string) => {
      await dispatch(
        setSelectedItem({ selectedItem: { Start: startLocal, End: endLocal } })
      );
    },
    [dispatch]
  );

  useEffect(() => {
    const startLocal = moment(
      date + time,
      constants.DATE_TIME_FORMAT
    ).toISOString();
    const endLocal = moment(date + time, constants.DATE_TIME_FORMAT)
      .add(Duration, "minutes")
      .toISOString();
    const today = moment().toISOString();
    //selectDate > StartAfter
    const isValidStartAfter =
      !StartAfter || (StartAfter && moment(startLocal).isAfter(StartAfter));
    //selectDate < EndBefore
    const isValidEndBefore =
      !EndBefore || (EndBefore && moment(startLocal).isBefore(EndBefore));
    //Present <= selectedDate < StartBefore
    const isValidStartBefore =
      !StartBefore ||
      (StartBefore &&
        moment(today).isSameOrBefore(startLocal) &&
        moment(startLocal).isBefore(StartBefore));

    if (!date || !time) {
      dispatch(setEnableSave({ isEnable: false }));
    }
    if (date && time) {
      if (moment(startLocal).isBefore(today)) {
        dispatch(setEnableSave({ isEnable: false }));
        setIsInvalid(true);
        setErrorMsg("Date and time must not be in the past");
      } else if (
        !isValidStartAfter ||
        !isValidEndBefore ||
        !isValidStartBefore
      ) {
        dispatch(setEnableSave({ isEnable: false }));
        setIsInvalid(true);
        setErrorMsg("Date and time must comply with Job Time Constraints");
      } else {
        dispatch(setEnableSave({ isEnable: true }));
        setIsInvalid(false);
        setErrorMsg("");
        updateSelectedItem(startLocal, endLocal);
      }
    }
  }, [
    Duration,
    EndBefore,
    StartAfter,
    StartBefore,
    date,
    dispatch,
    time,
    updateSelectedItem,
  ]);

  const onSeeSuggestedTime = () => {
    dispatch(
      setTitle({
        title: constant.TITLE_SUGGESTED_TIME,
      })
    );
    dispatch(
      setView({
        view: constant.VIEW_SUGGESTED_TIMES,
      })
    );
  };

  useEffect(() => {
    if (storeProps.selectedItem.Start) {
      setDate(
        moment(storeProps.selectedItem.Start).format(constants.DATE_FORMAT)
      );
      setTime(
        moment(storeProps.selectedItem.Start).format(constants.TIME_FORMAT)
      );
    }
  }, [storeProps.selectedItem.Start]);

  const isEnableSuggestBtn = (!date && !time) || (date && time);

  return (
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
        <button
          className={`suggest-btn ${
            isEnableSuggestBtn ? "suggest-btn-enable" : "suggest-btn-disabled"
          }`}
          type="submit"
          disabled={!isEnableSuggestBtn}
          onClick={onSeeSuggestedTime}
        >
          See suggested times
        </button>
      </div>
      <div className="page-note">
        View your agenda to see where this job could be scheduled
      </div>
    </div>
  );
};

export default ScheduleJob;
