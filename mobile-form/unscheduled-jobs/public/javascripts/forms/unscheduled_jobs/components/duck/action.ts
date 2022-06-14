export const constant = {
  VIEW_HOME: 'VIEW_HOME',
  VIEW_SCHEDULE_JOB: 'VIEW_SCHEDULE_JOB',
  VIEW_BODY_MAP: 'VIEW_BODY_MAP',
  TITLE_MY_JOBS: 'TITLE_MY_JOBS',
  TITLE_SCHEDULE_JOB: 'TITLE_SCHEDULE_JOB',

  ACTION_INIT_DATA: 'INIT_DATA',
  ACTION_SET_VIEW: 'SET_VIEW',
  ACTION_SAVE_DATA_TO_SALESFORCE: 'ACTION_SAVE_DATA_TO_SALESFORCE',
  ACTION_SET_SELECTED_ITEM: 'SET_SELECTED_ITEM',
  ACTION_SHOW_LOADDING: 'ACTION_SHOW_LOADDING',
  ACTION_SET_TITLE: 'ACTION_SET_TITLE',
  ACTION_SET_ENABLE_SAVE: 'ACTION_SET_ENABLE_SAVE'

}

const createSimpleAction = (type: string) => (params: any) => (dispatch: any, getState: any) => dispatch({type, params});

export const setView = createSimpleAction(constant.ACTION_SET_VIEW);
export const setTitle = createSimpleAction(constant.ACTION_SET_TITLE);
export const setSelectedItem = createSimpleAction(constant.ACTION_SET_SELECTED_ITEM);
export const saveDataToSf = createSimpleAction(constant.ACTION_SAVE_DATA_TO_SALESFORCE);
export const showLoading = createSimpleAction(constant.ACTION_SHOW_LOADDING);
export const setEnableSave = createSimpleAction(constant.ACTION_SET_ENABLE_SAVE);