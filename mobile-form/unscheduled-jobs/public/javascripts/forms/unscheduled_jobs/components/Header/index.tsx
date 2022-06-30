import { controls } from "@skedulo/custom-form-controls";
import axios from "axios";
import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import { isEmpty } from "lodash";
import { toast, ToastContainer } from "react-toastify";

import formContext from "../../formContext";
import { constant, setView, setTitle, setSlotSelected, setSelectedItem } from "../duck/action";
import { Job } from "../duck/type";
import { queryJob, updateJobsMutation } from "../../query/index";
import { constants } from "../../constants";
//@ts-ignore
import SuccessIcon from "../../images/Union.svg";
import "react-toastify/dist/ReactToastify.min.css";
import "./styles.scss";

const { PopUp } = controls;
interface IProps {
  onGobackFn: Function;
  onSaveFn?: Function;
  showConfirm?: Function;
}

const Header: React.FC<IProps> = ({ onGobackFn }: IProps) => {
  const dispatch = useDispatch();
  const context = React.useContext(formContext);
  const {
    widgets,
    main: { resourceIds, resources },
    common,
  } = context;
  const resourceRegion = resources[0].PrimaryRegion.Name;

  const [isShowPopup, setIsShowPopup] = useState(false);

  const storeProps = useSelector(({ reducer }: any) => {
    return {
      view: reducer.view as string,
      job: reducer.main.job,
      title: reducer.title as string,
      selectedItem: reducer.selectedItem as Job,
      isEnable: reducer.isEnable as boolean,
      isEnableSuggest: reducer.isEnableSuggest as boolean,
      slotSelected: reducer.slotSelected as any
    };
  });

  const onGoBackHandler = React.useCallback(() => {
    if (!storeProps.view) {
      onGobackFn();
      return;
    }
    if (storeProps.view === constant.VIEW_HOME) {
      onGobackFn();
    } else {
      switch (storeProps.view) {
        case constant.VIEW_SUGGESTED_TIMES:
          dispatch(setTitle({ title: constant.TITLE_MY_JOBS }));
          dispatch(setView({ view: constant.VIEW_HOME }));
          break;
        default:
          dispatch(setTitle({ title: constant.TITLE_MY_JOBS }));
          dispatch(setView({ view: constant.VIEW_HOME }));
          break;
      }
    }
  }, [storeProps, onGobackFn, dispatch]);

  const onSuggestedTimeBack = React.useCallback(() => {
    dispatch(setTitle({ title: constant.TITLE_SCHEDULE_JOB }));
          dispatch(setView({ view: constant.VIEW_SCHEDULE_JOB }));
          dispatch(
            setSlotSelected({
              slotSelected: {
                ...storeProps.slotSelected,
                start: '',
                end: '',
                date: ''
              },
            })
          );
          dispatch(
            setSelectedItem({
              selectedItem: {
                ...storeProps.selectedItem,
                Start: null,
                End: null
              },
            })
          );
  }, [storeProps, dispatch]);

  useEffect(() => {
    // register back button for andoid device
    let count = 1;
    const interval = setInterval(() => {
      if (count === 10) {
        clearInterval(interval);
      }
      // @ts-ignore
      if (typeof window.ContainerRegisterBackButtonHandler === "function") {
        // @ts-ignore
        window.ContainerRegisterBackButtonHandler(() => onGoBackHandler());
        clearInterval(interval);
      }
      count++;
    }, 1000);
  }, [onGoBackHandler]);

  const number = 7;
  const information = buildInformation();
  const [headerClickCount, setHeaderClickCount] = useState(0);
  const [timeout, setTimeoutNumber] = useState<any>(-1);

  const onHeaderClickHandler = React.useCallback(
    (_headerClickCount: number) => {
      if (_headerClickCount < number) {
        _headerClickCount += 1;
        clearTimeout(timeout);
        setHeaderClickCount(_headerClickCount);
      } else {
        setHeaderClickCount(number);
      }

      setTimeoutNumber(
        setTimeout(() => {
          if (headerClickCount < number - 1) {
            setHeaderClickCount(0);
          }
        }, 2000)
      );
    },
    [timeout, headerClickCount]
  );

  const [titleHeader, setTitleHeader] = useState("");
  const displayTitle = useCallback(() => {
    switch (storeProps.title) {
      case constant.TITLE_SUGGESTED_TIME:
        setTitleHeader("Suggested times");
        break;
      case constant.TITLE_SCHEDULE_JOB:
        setTitleHeader("Schedule work");
        break;
      default:
        setTitleHeader("Unscheduled work");
        break;
    }
  }, [storeProps.title]) ;

  useEffect(() => {
    displayTitle();
  }, [displayTitle]);

  const start = storeProps.selectedItem.Start;
  const end = storeProps.selectedItem.End;

  const saveJobToDB = async () => {
    await widgets
      .GraphQL({
        query: updateJobsMutation,
        variables: {
          input: {
            UID: storeProps.selectedItem.UID,
            Start: storeProps.selectedItem.Start,
            End: storeProps.selectedItem.End,
          },
        },
      })
      .then(() => {
        onGoBackHandler();
        dispatch(setTitle({ title: constant.TITLE_MY_JOBS }));
        toast(
          <div className="content-msg">
            <img src={SuccessIcon} alt="React Logo" />
            {storeProps.selectedItem.Name} has been scheduled
          </div>
        );
      })
      .catch((e: any) => console.log("e", e));
  };

  const token = common.authData.skeduloAccess.token
    ? common.authData.skeduloAccess.token
    : constants.sessionToken;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      ["Content-Type"]: `application/json`,
    },
  };

  const API_GET_AVAILABLE_RESOURCE = `${constants.API_ROOT}/${constants.API_GET_AVAILABLE_RESOURCE}`;
  const onSaveJob = async () => {
    const resourceId = resourceIds[0] as TimeRanges;
    const res = await axios.post(
      API_GET_AVAILABLE_RESOURCE,
      {
        start: start,
        end: end,
        resourceIds: [resourceId],
        availability: true,
        unavailability: true,
      },
      config
    );

    if (res.status === constants.SUCCESS_CODE) {
      const result = res.data.url.result;

      const resourceInfo = Object.values(result) as any;
      const resourceAvalability = resourceInfo[0].available;

      let availableSlot = [];
      if (resourceAvalability.length !== []) {
        availableSlot = resourceAvalability.filter((item: any) => {
          return (
            moment(`${storeProps.selectedItem.Start}`).isSameOrAfter(
              `${item.start}`
            ) &&
            moment(`${storeProps.selectedItem.End}`).isSameOrBefore(
              `${item.end}`
            )
          );
        });
      }

      const { jobs } = await widgets.GraphQL({
        query: queryJob,
        variables: {
          filterJob: `End >= ${start} AND Start <= ${end}`,
        },
      });

    const newArr = jobs.filter(function (element: Job) {
      return element.JobAllocations.some( function (subElement: any) {
          return subElement.ResourceId === resourceId && element.Region.Name == resourceRegion;
      });
  });

      if (!isEmpty(availableSlot) && isEmpty(newArr)) {
        saveJobToDB();
        setIsShowPopup(false);
      } else {
        setIsShowPopup(true);
      }
    }
  };
  const onSave = () => {
    saveJobToDB();
  };


  return (
    <header className="bar-title">
      <button className="btn transparent fl" onClick={storeProps.title === constant.TITLE_SUGGESTED_TIME ? onSuggestedTimeBack : onGoBackHandler}>
        <i className="sk sk-chevron-left color-white " />
      </button>

      <div className="title text-title">
        <h1 onClick={() => onHeaderClickHandler(headerClickCount)}>
          <span className="text-title">{titleHeader}</span>
        </h1>
      </div>

      {storeProps.view === constant.VIEW_SCHEDULE_JOB && (
        <button
          className="btn transparent fr"
          onClick={storeProps.isEnable ? onSaveJob : (e) => e.preventDefault()}
          
        >
          <span
            className={`btn-save ${
              storeProps.isEnable ? "enable-btn" : "disable-btn"
            }`}
          >
            Save
          </span>
        </button>
      )}
      {storeProps.view === constant.VIEW_SUGGESTED_TIMES && (
        <button
          className="btn transparent fr"
          onClick={storeProps.isEnableSuggest ? onSaveJob : (e) => e.preventDefault()}
        >
          <span
            className={`btn-save ${
              storeProps.isEnableSuggest ? "enable-btn" : "disable-btn"
            }`}
          >
            Save
          </span>
        </button>
      )}

      {headerClickCount === number && (
        <PopUp
          show={headerClickCount === number}
          title="Form Information"
          buttons={[
            {
              primary: true,
              action: () => setHeaderClickCount(0),
              caption: "Close",
            },
          ]}
        >
          <div dangerouslySetInnerHTML={{ __html: information }} />
        </PopUp>
      )}
      {isShowPopup && (
        <PopUp
          show={isShowPopup}
          title="Confirm"
          buttons={[
            {
              primary: false,
              action: () => setIsShowPopup(false),
              caption: "Cancel",
            },
            {
              primary: true,
              action: () => {
                onSave();
                setIsShowPopup(false);
              },
              caption: "Save anyway",
            },
          ]}
        >
          <div className="text-popup">
            You are not available at the selected date/time
          </div>
        </PopUp>
      )}

      {storeProps.view === constant.VIEW_HOME && (
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          closeButton={false}
        />
      )}
    </header>
  );
};

const buildInformation = () => {
  const infoData: any = require("../../../../../build-info/latest.json");
  let information = `<div class="text-left">`;
  information += Object.keys(infoData)
    .reduce(
      (result, key) => [
        ...result,
        `<strong>${key}</strong>`,
        `${infoData[key]}`,
      ],
      []
    )
    .join(`<br />`);
  information += `</div>`;
  return information;
};

export default Header;
