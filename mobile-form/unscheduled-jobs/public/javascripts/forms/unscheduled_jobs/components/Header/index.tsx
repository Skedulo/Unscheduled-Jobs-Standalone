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

  const token = common.authData.skeduloAccess.token ? common.authData.skeduloAccess.token : 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5Ua3pNa0l4TkVJMVJrRkZNRUl5T0VFeE0wWkRSall5TkVKQ056VkRNRUZFTVRBM00wVkVNZyJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoiYXV0aDB8MDAwMTVlM2QtMTA1My00OTdiLTkwYjAtNTVjOTc1NzBjMGZhIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdmVuZG9yIjoic2tlZHVsbyIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL3VzZXJuYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vb3JnYW5pemF0aW9uX2lkIjoic2tfNmY5NzVlMzkyNmNmNGQ4NzlhNGJhNWMwNDIwMjU5NjQiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9uYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcmVzb3VyY2VfaWQiOiIwMDA1NjkxNy1mNmMzLTQ5NjEtODdjZi1iZDY5Y2YzYjc4ZWEiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9yb2xlcyI6WyJyZXNvdXJjZSJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsidXNlcl9pZCI6IjAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSJ9LCJpc3MiOiJodHRwczovL3NrZWR1bG8tcHJvZC1hdTEuYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSIsImF1ZCI6WyJodHRwczovL2FwaS5hdS5za2VkdWxvLmNvbSIsImh0dHBzOi8vc2tlZHVsby1wcm9kLWF1MS5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjU1MTcyNjc1LCJleHAiOjE2NTUyMTU4NzUsImF6cCI6ImU2eHN2MVpVcnZldVAwVENPdlRyQWllaWJ6WGZxV2N3Iiwic2NvcGUiOiJvcGVuaWQifQ.j4YpQiSJ-ls1x2XErW7T_HiuP0YfrLV7VIh691A9MqeEf0IE17eKwNQK1A2LYUJ3n4fjlTLq2HKqSYj6S_U2FH-4XWqSBFcQ9N33ENnbQGyghijD_5lFojhM-n15nd36iJCxLuccYc99UPvGaEwrFGI3FGeyEpTOo4_xkYq2pBdiwCBVPdpWRK6slBeRhBbWhgvzFZ60tT4l9MF78DaqOKHa2_j0lqENVMchHaMbN5uhNQY7l5U0HORm7frCqfAa7ckZJUqyBbTP8-vIgih0GVguw1Tmkcau-oSeV8IZDqZqqmg4j10z97RLhF6udYc-oIYMGSl86k0ojupvBn-l5g';
  console.log("🚀 ~ file: index.tsx ~ line 159 ~ .then ~ token", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      ['Content-Type']: `application/json`
    }
  
  };
  
  const onSaveJob = async () => {
    const resourceId = resourceIds[0] as TimeRanges;
    const res = await axios.post(
      "https://api.au.skedulo.com/pkgr/function/Unscheduled/WebHookFn/get-resource-available",
      {
        start: start,
        end: end,
        resourceIds: [resourceId],
        availability: true,
        unavailability: true,
      },
      config
    );
    console.log('res :>> ', res);

    if (res.status === 200) {
      const result = res.data.url.result;
      console.log("🚀 ~ file: index.tsx ~ line 185 ~ onSaveJob ~ result", result)
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
        autoClose={5000}
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
