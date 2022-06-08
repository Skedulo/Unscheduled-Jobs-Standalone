import { controls } from "@skedulo/custom-form-controls";
import * as React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { constant, saveDataToSf, setView } from "../duck/action";
import "./styles.scss";

const { PopUp } = controls;

interface IProps {
  onGobackFn: Function,
  onSaveFn?: Function,
  showConfirm?: Function
}

const Header: React.FC<IProps> =  ({ onGobackFn }: IProps) => {
  const dispatch = useDispatch();
  const storeProps = useSelector(({ reducer }: any) => {
    return {
      view: reducer.view as string,
      job: reducer.main.job,
      title: reducer.title as string
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
      if (typeof window.ContainerRegisterBackButtonHandler === 'function') {
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

  const onHeaderClickHandler = React.useCallback((_headerClickCount: number) => {
    if (_headerClickCount < number) {
      _headerClickCount += 1;
      clearTimeout(timeout);
      setHeaderClickCount(_headerClickCount);
    } else {
      setHeaderClickCount(number);
    }

    setTimeoutNumber(setTimeout(() => {
      if (headerClickCount < number - 1) {
        setHeaderClickCount(0);
      }
    }, 2000));
  }, [timeout, headerClickCount]);


const [title, setTitle] = useState("");
  const displayTitle = () => {
    if(storeProps.title === constant.TITLE_MY_JOBS) {
      setTitle('Unscheduled work');
      } else if(storeProps.title === constant.TITLE_SCHEDULE_JOB) {
        setTitle('Schedule work')
      }
  }

  useEffect(() => {
    displayTitle();
  }, [storeProps.title])

  return (
    <header className="bar-title">
      <button className="btn transparent fl" onClick={() => onGoBackHandler()}>
        <i className="sk sk-chevron-left color-white " />
      </button>

      <div className="title text-title">
        <h1 onClick={() => onHeaderClickHandler(headerClickCount)}><span className="text-title">{title}</span></h1>
      </div>

      {storeProps.view === constant.VIEW_SCHEDULE_JOB &&
        <button className="btn transparent fr" onClick={() => dispatch(saveDataToSf({}))}>
          <span className="btn-save">Save</span>
        </button>}

      {headerClickCount === number && (
        <PopUp show={headerClickCount === number} title="Form Information"
          buttons={[{
            primary: true,
            action: () => setHeaderClickCount(0),
            caption: 'Close'
          }]}><div dangerouslySetInnerHTML={{ __html: information }} /></PopUp>)}
    </header>
  );
};

const buildInformation = () => {
  const infoData: any = require('../../../../../build-info/latest.json');
  let information = `<div class="text-left">`;
  information += Object.keys(infoData).reduce((result, key) => ([...result, `<strong>${key}</strong>`, `${infoData[key]}`]), []).join(`<br />`);
  information += `</div>`;
  return information;
};

export default Header;