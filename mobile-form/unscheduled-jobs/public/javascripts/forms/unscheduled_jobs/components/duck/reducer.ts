import { AppState, AppAction } from './type';
import { constant } from './action'

export default function reducer(state: AppState = {
  timestamp: Date.now(),
  main: {},
  common: {},
  saveFn: () => { },
  view: constant.VIEW_HOME,
  showLoading: false,
  jobs: [],
  title: constant.TITLE_MY_JOBS,
  selectedItem: {},
  isEnable: false
}, action: AppAction): AppState {
  switch (action.type) {
    case constant.ACTION_INIT_DATA: {
      const { main, common, saveFn, widgets, deviceCache, liveDataService, title } = action.params;
      const jobs = main.jobs;
      return {
        ...state, main, common, saveFn,
        timestamp: Date.now(),
        jobs
      };
    }
    case constant.ACTION_SHOW_LOADDING: {
      return {
        ...state,
        showLoading: action.params
      };
    }
    case constant.ACTION_SET_VIEW: {
      const { params } = action;
      return {
        ...state,
        view: params.view
      };
    }
    case constant.ACTION_SET_TITLE: {
      const { params } = action;
      return {
        ...state,
        title: params.title
      };
    }
    case constant.ACTION_SET_SELECTED_ITEM: {
      const { params } = action;
      return {
        ...state,
        selectedItem: { ...params.selectedItem }
      };
    }
    case constant.ACTION_SET_ENABLE_SAVE: {
      const { params } = action;
      return {
        ...state,
        isEnable: params.isEnable
      };
    }
    case constant.ACTION_SAVE_DATA_TO_SALESFORCE: {

      // const changeSet = state.supportNotes.changeSet();
      state.saveFn({
        jobId: state.main.jobId,
      }, {
        // jobId: state.main.jobId,
        // job: state.main.job,
        // contact: state.main.contact,
        // supportNotes: state.supportNotes.listAll(),
        // attachment: state.main.attachment
      }, false, true);

      return { ...state };
    }
  }

  return state;
}