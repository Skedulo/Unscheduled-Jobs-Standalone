import * as React from "react";
import { CSSTransition } from 'react-transition-group';
import { constant as ct } from "@skedulo/custom-form-controls";
import { constant } from "./duck/action";

import MyJobs from "../pages/MyJobs/MyJobs";
import ScheduleJob from "../pages/ScheduleJob";
import SuggestedTimes from "../pages/SuggestedTimes";


export default ({ view }: { view: string }) => {
  return (
    <React.Fragment>
      <CSSTransition in={view === constant.VIEW_HOME} {...ct.transitionGroup}><MyJobs /></CSSTransition>
      <CSSTransition in={view === constant.VIEW_SCHEDULE_JOB} {...ct.transitionGroup}><ScheduleJob /></CSSTransition>
      <CSSTransition in={view === constant.VIEW_SUGGESTED_TIMES} {...ct.transitionGroup}><SuggestedTimes /></CSSTransition>
    </React.Fragment>
  );
};
