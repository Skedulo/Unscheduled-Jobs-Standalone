export const constant = {
  VIEW_HOME: 'VIEW_HOME',
  VIEW_DETAIL: 'VIEW_DETAIL',
  VIEW_BODY_MAP: 'VIEW_BODY_MAP',

  ACTION_INIT_DATA: 'INIT_DATA',
  ACTION_SET_VIEW: 'SET_VIEW',
  ACTION_SAVE_DATA_TO_SALESFORCE: 'ACTION_SAVE_DATA_TO_SALESFORCE',
  ACTION_SET_SELECTED_ITEM: 'SET_SELECTED_ITEM',
  ACTION_SHOW_LOADDING: 'ACTION_SHOW_LOADDING',
}

const createSimpleAction = (type: string) => (params: any) => (dispatch: any, getState: any) => dispatch({type, params});

export const setView = createSimpleAction(constant.ACTION_SET_VIEW);
export const setSelectedItem = createSimpleAction(constant.ACTION_SET_SELECTED_ITEM);
export const saveDataToSf = createSimpleAction(constant.ACTION_SAVE_DATA_TO_SALESFORCE);
export const showLoading = createSimpleAction(constant.ACTION_SHOW_LOADDING);