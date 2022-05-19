//all auth related Action type will be defined here
export enum ActionType {
  SIGN_IN_OPERATION = 'SIGN_IN_OPERATION',
  DECREMENT_OPERATION = 'DECREMENT_OPERATION',
  PUSH_TEST_OBJECT = 'PUSH_TEST_OBJECT',
  //for sign in loading screen
  SIGN_IN_LOADING = 'SIGN_IN_LOADING',
  //auth error
  AUTH_ERROR_MESSAGE = 'AUTH_ERROR_MESSAGE',
}
// for Increment operation
interface actionSignIN {
  type: ActionType.SIGN_IN_OPERATION;
  payload: {
    email: string;
    password: string;
  };
}
// for decrement operation
interface actionDecrement {
  type: ActionType.DECREMENT_OPERATION;
  payload: Number;
}

interface testObjects {
  type: ActionType.PUSH_TEST_OBJECT;
  payload: {
    name: String;
    value: String;
  };
}
/**
 * inter face for sign in loading procedure
 */
interface signInLoading {
  type: ActionType.SIGN_IN_LOADING;
  payload: boolean;
}

//interface for auth error message
interface authErrorMessage {
  type: ActionType.AUTH_ERROR_MESSAGE;
  payload: String;
}

// action will be passed through action: Action method
export type Action =
  | actionSignIN
  | actionDecrement
  | testObjects
  | authErrorMessage
  | signInLoading;
