// eslint-disable-next-line node/no-missing-import
import 'sass/skedulo-mobile';
// eslint-disable-next-line node/no-missing-import
import 'signature';

import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/main';
import { Provider } from "react-redux";
import store from "./store";
import { constant } from "./components/duck/action";
import { LiveDataService, GraphiQLHelper } from '@skedulo/custom-form-controls/dist/helper';
import Context from "./formContext";

export default function wrapper(currentJobId, formSaveFunc, widgets, onLoadCallback = () => console.info('--> View Ready <--')) {

  window.onerror = function (message, file, line, col, error) {
    this.window.document.write(`
      <div style="color: #A9A9A9;">
        <h3 style="color: #8B0000;">Script Error:</h3>
        <h4> ${message}</h4>
        <div>${file}, line: ${line}, col: ${col}</div>
        <div>${error}</div>
      </div>
    `);
    return false;
  };

  return function (formData, deviceCache) {
    // console.log('initApp', formData, currentJobId);

    const { main, common } = formData;
    const graphiQl = new GraphiQLHelper(main.authData);

    if (location.protocol.indexOf('http') > -1) {
      widgets.TakePhoto = widgets.GetFromGallery = widgets.SignaturePanel;
      widgets.GraphQL = ({ query, variables }) => graphiQl.executeQuery(query, variables).then(res => res.data);
    }

    // format query data
    widgets.originGrapthQl = widgets.GraphQL;
    widgets.GraphQL = (parameters) => widgets.originGrapthQl(parameters).then(graphiQl.formatResponseData);

    // setup live data service
    const liveDataService = main.authData ? new LiveDataService(main.authData) : null;

    store.dispatch({
      type: constant.ACTION_INIT_DATA,
      params: { main, common, saveFn: formSaveFunc }
    });

    ReactDOM.render(<Provider store={store}>
      <Context.Provider value={{ main, common, widgets, deviceCache, liveDataService }}>
        <MainComponent />
      </Context.Provider>
    </Provider>, document.getElementById('root'), () => {
      onLoadCallback();
    });
  };
}
