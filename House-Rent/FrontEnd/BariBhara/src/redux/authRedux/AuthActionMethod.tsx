/**
 * Auth Related action define here
 */

import {ActionType} from './AuthActionCreator';
import store from '../store';
//distract dispatch from store
const {dispatch} = store;

//all sign in props defined here
type signInProps = {
  email: string;
  password: string;
};

//Increment goes here
export const SignInProcess = async ({email, password}: signInProps) => {
  //its run only in development mood
  if (__DEV__) {
    console.log(email, password, 'from sign in process');
  }
  try {
    // start loading screen here
    dispatch({type: ActionType.SIGN_IN_LOADING, payload: true});

    // end loading screen here
    dispatch({type: ActionType.SIGN_IN_LOADING, payload: false});
  } catch (signInPropsError: any) {
    // end loading screen here
    dispatch({type: ActionType.SIGN_IN_LOADING, payload: false});
    if (__DEV__) {
      console.log(signInPropsError.message, 'from auth action sign in process');
    }
  }
  dispatch({
    type: ActionType.SIGN_IN_OPERATION,
    payload: {email, password},
  });
};

//Decrement method goes here
export const DecMethod = () => {
  dispatch({type: ActionType.DECREMENT_OPERATION, payload: 1});
};
/**
 * /**
 * Auth Related action define here
 

import {ActionType} from './AuthActionCreator';
import store from '../store';
//distract dispatch from store
const {dispatch} = store;

type signInProps = {
  email: string;
  password: string;
};

//Increment goes here
export const SignInProcess = ({email, password}: signInProps) => {
  dispatch({
    type: ActionType.PUSH_TEST_OBJECT,
    payload: {email, password},
  });
};

//Decrement method goes here
export const DecMethod = () => {
  dispatch({type: ActionType.DECREMENT_OPERATION, payload: 1});
};

 */
