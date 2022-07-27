import { AppState, AppAction } from './type';
import { constant } from './action';

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
  isEnable: false,
  isEnableSuggest: false,
  slotSelected: {}
}, action: AppAction): AppState {
  switch (action.type) {
    case constant.ACTION_INIT_DATA: {
      const { main, common, saveFn } = action.params;
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
        selectedItem: {...state.selectedItem, ...params.selectedItem }
      };
    }
    case constant.ACTION_SET_ENABLE_SAVE: {
      const { params } = action;
      return {
        ...state,
        isEnable: params.isEnable
      };
    }
    case constant.ACTION_SET_ENABLE_SAVE_SLOT: {
      const { params } = action;
      return {
        ...state,
        isEnableSuggest: params.isEnableSuggest
      };
    }
    case constant.ACTION_SET_SELECTED_SLOT: {
      const { params } = action;
      return {
        ...state,
        slotSelected: params.slotSelected
      };
    }
  }

  return state;
}
