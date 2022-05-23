//bring action with type
import {Action, ActionType} from './AuthActionCreator';

//define state variable with their type
export interface authState {
  counter: Number;
  signIn_loader: boolean;
  authError: String;
  token: String;
}

//our initial state define here
//this the initial value of our state
const initialState: authState = {
  counter: 0,
  signIn_loader: false,
  authError: '',
  token: '',
};

/**
 * our actual dashboard will be define here
 * by this our all initial state will be add, delete, update etc happen
 *
 */
// create auth reducer to do action
const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SIGN_IN_LOADING:
      return {
        ...state,
        signIn_loader: action.payload,
      };
    case ActionType.AUTH_ERROR_MESSAGE:
      return {
        ...state,
        authError: action.payload,
      };
    case ActionType.AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
