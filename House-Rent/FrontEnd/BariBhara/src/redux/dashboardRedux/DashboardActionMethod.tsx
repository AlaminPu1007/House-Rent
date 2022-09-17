/**
 * our all dashboard redux related thing
 * will be goes from here
 */

// bring all dash board action type for access certain task
import {ActionType} from './DashboardActionCreator';
//destruct ActionType
const {STORE_DASHBOARD_DATA, LIKE_ON_POST} = ActionType;
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
export const StorePostData = async ({data}: storePostDataProps) => {
  try {
    // later api called and data store inside redux
    // method implemented, now redux is added only
    // store dummy json inside redux
    dispatch({type: STORE_DASHBOARD_DATA, payload: data});
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

/**
 * @post_id -> user specific like post id
 * @use_react -> user specific react to a post
 */
type likeOnPost = {
  myLike: Boolean;
  postId: String;
};

export const LikeOnSpecifPost = async ({myLike, postId}: likeOnPost) => {
  try {
    //dispatch action for like
    dispatch({type: LIKE_ON_POST, payload: {myLike, postId}});
  } catch (likeOnPostErrors: any) {
    //this clg will be show for dev mood only
    if (__DEV__) {
      console.log(
        likeOnPostErrors.message,
        'from dashboard store post data likeOnPostErrors error',
      );
    }
  }
};
