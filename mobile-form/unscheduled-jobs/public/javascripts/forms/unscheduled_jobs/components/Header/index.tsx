import { controls } from "@skedulo/custom-form-controls";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import formContext from "../../formContext";
import { constant, saveDataToSf, setView, setTitle } from "../duck/action";
import { Job } from "../duck/type";
import "./styles.scss";
import { queryJob, updateJobsMutation } from "../../query/index";
import moment from "moment-timezone";
import { isEmpty } from "lodash";
import {
  getTimeValue,
  setTimeValueIsoString,
} from "@skedulo/custom-form-controls/dist/helper";
import { toast, ToastContainer } from "react-toastify";
//@ts-ignore
import SuccessIcon from '../../images/Union.svg';

const { PopUp } = controls;

interface IProps {
  onGobackFn: Function;
  onSaveFn?: Function;
  showConfirm?: Function;
}

interface ResourceInfo {
  availability: [];
  available: { start: string; end: string }[];
  regions: { start: string; end: string }[];
  shifts: [];
  unavailability: [];
  unavailable: [];
}

const Header: React.FC<IProps> = ({ onGobackFn }: IProps) => {
  const dispatch = useDispatch();
  const context = React.useContext(formContext);
  const {
    widgets,
    main: { resourceIds },
    common,
  } = context;
  const { token } = common.authData.skeduloAccess;
  console.log("🚀 ~ file: index.tsx ~ line 47 ~ token", token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [isShowPopup, setIsShowPopup] = useState(false);

  const storeProps = useSelector(({ reducer }: any) => {
    return {
      view: reducer.view as string,
      job: reducer.main.job,
      title: reducer.title as string,
      selectedItem: reducer.selectedItem as Job,
      isEnable: reducer.isEnable as boolean,
    };
  });

  const onGoBackHandler = React.useCallback(() => {
    if (!storeProps.view) {
      onGobackFn();
      return;
    }
    if (storeProps.view === constant.VIEW_HOME) {
      // window.navGoBack();

      onGobackFn();
    } else {
      switch (storeProps.view) {
        // case constant.VIEW_DETAIL: dispatch(setView({view: constant.VIEW_MUST_READ_INFORMATION})); break;

        default:
          dispatch(setView({ view: constant.VIEW_HOME }));
      }
    }
  }, [storeProps.view, dispatch, onGobackFn]);

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
  const displayTitle = () => {
    if (storeProps.title === constant.TITLE_MY_JOBS) {
      setTitleHeader("Unscheduled work");
    } else if (storeProps.title === constant.TITLE_SCHEDULE_JOB) {
      setTitleHeader("Schedule work");
    }
  };

  useEffect(() => {
    displayTitle();
  }, [storeProps.title]);

  const saveFn = useSelector(({ reducer }: any) => reducer.saveFn);

  const start = storeProps.selectedItem.Start;
  const end = storeProps.selectedItem.End;

  const saveJobToDB = async () => {
    await widgets.GraphQL({
        query: updateJobsMutation,
        variables: {
          input: {
            UID: storeProps.selectedItem.UID,
            Start: storeProps.selectedItem.Start,
            End: storeProps.selectedItem.End,
          },
        },
      })
      .then((res: any) => {
        console.log("🚀 ~ file: index.tsx ~ line 191 ~ }}).then ~ res", res);
        onGoBackHandler();
        toast(<div className="content-msg"> <img src={SuccessIcon} alt="React Logo" />{"This work has been scheduled"}</div>);
      })
      .catch((e: any) => console.log("e", e));
  };

  const onSaveJob = async () => {
    const resourceId = resourceIds[0] as TimeRanges;
    const res = await axios.post(
      "https://api.au.skedulo.com/availability/resources",
      {
        start: start,
        end: end,
        resourceIds: [resourceId],
        availability: true,
        unavailability: true,
      },
      config
    );

    if (res.status === 200) {
      const result = res.data.result;
      const resourceInfo = Object.values(result) as any;
      const resourceAvalability = resourceInfo[0].available;

      let availableSlot = [];
      if (resourceAvalability.length !== []) {
        availableSlot = resourceAvalability.filter((item: any) => {
          console.log("object :>> ", typeof item.end);
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

      // const {jobs} = await widgets.GraphQL({query: queryJob, variables: {
      //   filterJob: `Start >= ${moment(storeProps.selectedItem.Start).toISOString()} AND  End <= ${moment(storeProps.selectedItem.End).toISOString()}`
      // }});
      console.log("availableSlot", availableSlot);
      const { jobs } = await widgets.GraphQL({
        query: queryJob,
        variables: {
          filterJob: `Start >= ${start} AND  End <= ${end}`,
        },
      });

      const newArr = jobs.filter((item: any) =>
        item.JobAllocations.every((ja: any) => ja.ResourceId == `${resourceId}`)
      );
      console.log(
        "🚀 ~ file: index.tsx ~ line 177 ~ onSaveJob ~ newArr",
        newArr
      );
      if (!isEmpty(availableSlot) && isEmpty(newArr)) {
        saveJobToDB();
        setIsShowPopup(false);
      } else {
        setIsShowPopup(true);
      }
    }

    // variables: {
    //   input: { filterJob: `Start == null AND JobStatus != 'Cancelled' AND Locked == false`}
    // }
    // saveFn({
    //   selectedItem: storeProps.selectedItem,
    //   resourceIds
    // }, {
    //   selectedItem: storeProps.selectedItem,
    //   resourceIds
    // })
  };
  const onSave = () => {
    saveJobToDB();
  };
  console.log("isShowPopup :>> ", isShowPopup);

  return (
    <header className="bar-title">
      <button className="btn transparent fl" onClick={() => onGoBackHandler()}>
        <i className="sk sk-chevron-left color-white " />
      </button>

      <div className="title text-title">
        <h1 onClick={() => onHeaderClickHandler(headerClickCount)}>
          <span className="text-title">{titleHeader}</span>
        </h1>
      </div>

      {storeProps.view === constant.VIEW_SCHEDULE_JOB && (
        <button className="btn transparent fr" onClick={onSaveJob}>
          <span
            className={`btn-save ${
              storeProps.isEnable ? "enable-btn" : "disable-btn"
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
        autoClose={500000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />)
       }
     
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
