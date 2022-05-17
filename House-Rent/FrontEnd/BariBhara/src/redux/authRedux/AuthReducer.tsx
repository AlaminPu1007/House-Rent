//bring action with type
import {Action, ActionType} from './AuthActionCreator';

//define state variable with their type
export interface authState {
  counter: Number;
  post: [];
  signIn_loader: boolean;
}

//our initial state define here
//this the initial value of our state
const initialState: authState = {
  counter: 0,
  post: [],
  signIn_loader: true,
};

// create auth reducer to do action
const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SIGN_IN_LOADING:
      return {
        ...state,
        signIn_loader: action.payload,
      };
    case ActionType.DECREMENT_OPERATION:
      return {
        ...state,
        counter: Number(state.counter) - Number(action.payload),
      };
    case ActionType.PUSH_TEST_OBJECT:
      return {
        ...state,
        post: [{name: action.payload.name, value: action.payload.value}],
      };
    default:
      return state;
  }
};

export default authReducer;
