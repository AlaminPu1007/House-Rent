/**
 * our all dashboard redux related thing
 * will be goes from here
 */

// bring all dash board action type for access certain task
import {ActionType} from './DashboardActionCreator';
import store from '../store';
//distract dispatch from store
const {dispatch} = store;

/**
 * Method to store post array of data inside redux
 * need to bd access this value form all screen
 * thats why we implemented it with redux
 */
type storePostDataProps = {
  data: any;
};
export const StorePostData = async ({data}: any) => {
  try {
    // later api called and data store inside redux
    // method implemented, now redux is added only
    // store dummy json inside redux
    dispatch({type: ActionType.STORE_DASHBOARD_DATA, payload: data});
  } catch (StorePostDataError: any) {
    //this clg will be show for dev mood only
    if (__DEV__) {
      console.log(
        StorePostDataError.message,
        'from dashboard store post data error',
      );
    }
  }
};
