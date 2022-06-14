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


    // const main1 = {
    //   ...main,
    //   common: {
    //     authData: location.protocol.indexOf('http') === -1 ? main.common.authData : {skeduloAccess: {
    //       instance: "http://prod-elasticserver.prod.svc.cluster.local",
    //       token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5Ua3pNa0l4TkVJMVJrRkZNRUl5T0VFeE0wWkRSall5TkVKQ056VkRNRUZFTVRBM00wVkVNZyJ9.eyJodHRwczovL2FwaS5za2VkdWxvLmNvbS91c2VyX2lkIjoiYXV0aDB8MDAwMTVlM2QtMTA1My00OTdiLTkwYjAtNTVjOTc1NzBjMGZhIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vdmVuZG9yIjoic2tlZHVsbyIsImh0dHBzOi8vYXBpLnNrZWR1bG8uY29tL3VzZXJuYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vb3JnYW5pemF0aW9uX2lkIjoic2tfNmY5NzVlMzkyNmNmNGQ4NzlhNGJhNWMwNDIwMjU5NjQiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9uYW1lIjoiZXhwZXJ0c2VydmljZXMrdGVzdDAxQHNrZWR1bG8uY29tIiwiaHR0cHM6Ly9hcGkuc2tlZHVsby5jb20vcmVzb3VyY2VfaWQiOiIwMDA1NjkxNy1mNmMzLTQ5NjEtODdjZi1iZDY5Y2YzYjc4ZWEiLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS9yb2xlcyI6WyJyZXNvdXJjZSJdLCJodHRwczovL2FwaS5za2VkdWxvLmNvbS92ZW4iOnsidXNlcl9pZCI6IjAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSJ9LCJpc3MiOiJodHRwczovL3NrZWR1bG8tcHJvZC1hdTEuYXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDAwMDE1ZTNkLTEwNTMtNDk3Yi05MGIwLTU1Yzk3NTcwYzBmYSIsImF1ZCI6WyJodHRwczovL2FwaS5hdS5za2VkdWxvLmNvbSIsImh0dHBzOi8vc2tlZHVsby1wcm9kLWF1MS5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjU0ODMwNzgwLCJleHAiOjE2NTQ4NzM5ODAsImF6cCI6ImU2eHN2MVpVcnZldVAwVENPdlRyQWllaWJ6WGZxV2N3Iiwic2NvcGUiOiJvcGVuaWQifQ.leT1xwkkchoHQ_16RTOxmBoE_8OCH7_vyVdWTZsbcRVndxvWBM0k5JooFGTh90nWogbuyaSFGwGHNFzqjn_NXqHAPo0JEiU6W5zpElMl03BsbFYs27P_ftimYP6yn_l3QegtVBvfwZIKX2V2hbMWp1qxAgQFFXotEXACCu3UlUJZ1oU18ISKk_xrgI-r7mWIBad-2EYzvbxN6Kccvm-kWS819FKgfMIQ9GJE0eWOyINAZya97W3r56t30QlbRzpH4v0nDPxkr3gBJrvo31AxLia8pd6vhb_CTcvYzL95Kw55akP-GLoqRlAkXKqMG5aV19Dalv-wUnsGPv4AgSHP6w"
    //     }
    //     }
    //   }
    // }

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
