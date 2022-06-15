import { controls } from "@skedulo/custom-form-controls";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import formContext from "../../formContext";
import { constant, setView, setTitle } from "../duck/action";
import { Job } from "../duck/type";
import "./styles.scss";
import { queryJob, updateJobsMutation } from "../../query/index";
import moment from "moment-timezone";
import { isEmpty } from "lodash";
import { toast, ToastContainer } from "react-toastify";
//@ts-ignore
import SuccessIcon from "../../images/Union.svg";
import "react-toastify/dist/ReactToastify.min.css";

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
        default:
          dispatch(setTitle({title: constant.TITLE_MY_JOBS}));
          dispatch(setView({view: constant.VIEW_HOME}))
          break;
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
      .then((res: any) => {
        onGoBackHandler();
        dispatch(setTitle({ title: constant.TITLE_MY_JOBS }));
        toast(
          <div className="content-msg">
            <img src={SuccessIcon} alt="React Logo" />
            {"This work has been scheduled"}
          </div>
        );
      })
      .catch((e: any) => console.log("e", e));
  };

  const token = common.authData.skeduloAccess.token
    ? common.authData.skeduloAccess.token
    : "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5Ua3pNa0l4TkVJMVJrRkZNRUl5T0VFeE0wWkRSall5TkVKQ056VkRNRUZFTVRBM00wVkVNZyJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoiYXV0aDB8MDAwMTVlM2QtMTA1My00OTdiLTkwYjAtNTVjOTc1NzBjMGZhIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdmVuZG9yIjoic2tlZHVsbyIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL3VzZXJuYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vb3JnYW5pemF0aW9uX2lkIjoic2tfNmY5NzVlMzkyNmNmNGQ4NzlhNGJhNWMwNDIwMjU5NjQiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9uYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcmVzb3VyY2VfaWQiOiIwMDA1NjkxNy1mNmMzLTQ5NjEtODdjZi1iZDY5Y2YzYjc4ZWEiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9yb2xlcyI6WyJyZXNvdXJjZSJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsidXNlcl9pZCI6IjAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSJ9LCJpc3MiOiJodHRwczovL3NrZWR1bG8tcHJvZC1hdTEuYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSIsImF1ZCI6WyJodHRwczovL2FwaS5hdS5za2VkdWxvLmNvbSIsImh0dHBzOi8vc2tlZHVsby1wcm9kLWF1MS5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjU1MjU4NzkxLCJleHAiOjE2NTUzMDE5OTEsImF6cCI6ImU2eHN2MVpVcnZldVAwVENPdlRyQWllaWJ6WGZxV2N3Iiwic2NvcGUiOiJvcGVuaWQifQ.MZ6nFoKrNmZInuOJm6Mh3c9T1f-_taYCMIImufu7Qb0RFAza9auZLGJxRUyuKBlGR3mD54FFi3gmkR0pOkdPdYM_VaAeFF5iBzqQ5cE6BYv9CYgpSE2TruXFEMQTtbZRV49S18DFntl9wKnWw01fvNup3WHUArRjm2N77tkTuxgiw8F8N-Mcr_T0ZsTHsErWxN4bsCW3UF_E40ZBJPlo6oOR9VPgEOhu4j1F3jjXoq31FzsUrkL4wHkwCH3r9QgM3dallzeq_ZDem1alLcm1x31aXTJTnWjvfG_7pAEojq-gSRDsl8QMahmD2sPEQBlFdcI4kf584fExw2WihgJzug";
  
    const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      ["Content-Type"]: `application/json`,
    },
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

    if (res.status === 200) {
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

      const newArr = jobs.filter(
        (item: any) =>
          item.Region.Name == `${resourceRegion}` &&
          item.JobAllocations.every(
            (ja: any) => ja.ResourceId == `${resourceId}`
          )
      );

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
      <button className="btn transparent fl" onClick={() => onGoBackHandler()}>
        <i className="sk sk-chevron-left color-white " />
      </button>

      <div className="title text-title">
        <h1 onClick={() => onHeaderClickHandler(headerClickCount)}>
          <span className="text-title">{titleHeader}</span>
        </h1>
      </div>

      {storeProps.view === constant.VIEW_SCHEDULE_JOB && (
        <button className="btn transparent fr" onClick={storeProps.isEnable ? onSaveJob : (e) => e.preventDefault()}>
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
