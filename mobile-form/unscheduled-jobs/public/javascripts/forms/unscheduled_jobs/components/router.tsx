import * as React from "react";
import { CSSTransition } from 'react-transition-group';
import { constant as ct } from "@skedulo/custom-form-controls";
import { constant } from "./duck/action";

import MyJobs from "../pages/MyJobs/MyJobs";

export default ({ view }: { view: string }) => {
  return (
    <React.Fragment>
      <CSSTransition in={view === constant.VIEW_HOME} {...ct.transitionGroup}><MyJobs /></CSSTransition>
    </React.Fragment>
  );
};
