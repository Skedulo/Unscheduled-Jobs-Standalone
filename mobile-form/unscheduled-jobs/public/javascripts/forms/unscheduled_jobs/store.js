import {applyMiddleware, createStore}  from "redux";
import { createLogger } from 'redux-logger';
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

import reducers from "./reducers";

const logger = createLogger({
  level: 'info',
  collapsed: true,
  diff: true
});

let middlewares = [promise(), thunk];

// TODO: find out how to fix this issue
// https://stackoverflow.com/questions/30030031/passing-environment-dependent-variables-in-webpack
// 3694367/you-are-currently-using-minified-code-outside-of-node-env-production-this
// if (process.env.NODE_ENV !== "production") {
  middlewares.push(logger);
// }

const middleware = applyMiddleware(...middlewares);

export default createStore(reducers, middleware);
