/**
 * In this file our all dashboard
 * reducer method will be define,
 * by this will happen after action called
 */
import {Action, ActionType} from './DashboardActionCreator';
//destruct ActionType
const {STORE_DASHBOARD_DATA, LIKE_ON_POST} = ActionType;

/// DEFINE PROPS OF INITIAL STATE
export interface dashboardState {
  post: any;
}

/// INITIAL STATE OF DASHBOARD REDUCER
const initialState: dashboardState = {
  post: [],
};

/**
 * our actual dashboard will be define here
 * by this our all initial state will be
 * (CRUD) method happen
 */
const dashboardReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case STORE_DASHBOARD_DATA:
      return {
        ...state,
        post: action.payload,
      };
    //case for like on a specific post
    case LIKE_ON_POST:
      const {postId, myLike} = action.payload;
      //find index of that post
      const get_post = state.post?.findIndex(
        (i: any) => i.id === parseInt(postId),
      );
      //make an copy of while post from state
      const copy_item = [...state.post];
      //if index if found, then update
      if (get_post) {
        copy_item[get_post] = {
          ...copy_item[get_post],
          my_like: myLike,
          like: copy_item[get_post].like + 1,
        };
      }
      //finally update state.post
      return {
        ...state,
        post: copy_item,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
