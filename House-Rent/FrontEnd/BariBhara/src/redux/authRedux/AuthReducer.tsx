//bring action with type
import {Action, ActionType} from './AuthActionCreator';

//define state variable with their type
export interface authState {
  counter: Number;
}

//our initial state define here
//this the initial value of our state
const initialState: authState = {
  counter: 0,
};

// create auth reducer to do action
const authReducer = (state = initialState, action: Action) => {
  switch (action) {
    default:
      return state;
  }
};

export default authReducer;
