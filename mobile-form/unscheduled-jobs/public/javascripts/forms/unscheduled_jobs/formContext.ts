import * as React from "react";

export interface IContext {
  main?: any,
  common?: any,
  deviceCache?: any,
  formSaveFunc?: Function,
  widgets?: any
}
export default React.createContext<IContext>({});