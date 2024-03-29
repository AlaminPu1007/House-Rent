/**
 * This is Dash board action create file
 * where our all action name will be defined
 * and will be pass it through dashboard reducer  method
 */

//all dashboard Action type will be defined here
export enum ActionType {
  STORE_DASHBOARD_DATA = 'STORE_DASHBOARD_DATA',
  LIKE_ON_POST = 'LIKE_ON_POST',
}

/// OUR ALL INTERFACE WILL BE DEFINE HERE(START)
// for Increment operation
interface actionStoreDashboardData {
  type: ActionType.STORE_DASHBOARD_DATA;
  payload: any;
}
// for like on a specific post
interface actionLikeOnPost {
  type: ActionType.LIKE_ON_POST;
  payload: any;
}
/// OUR ALL INTERFACE WILL BE DEFINE HERE(END)

// action will be passed through by action: Action method
export type Action = actionStoreDashboardData | actionLikeOnPost;
