/**
 * Auth Related action define here
 */

import {ActionType} from './AuthActionCreator';
import store from '../store';
//distract dispatch from store
const {dispatch} = store;
import api from '../../Api/api';

//all sign in props defined here
type signInProps = {
  email: string;
  password: string;
};

//Increment goes here
export const SignInProcess = async ({email, password}: signInProps) => {
  //its run only in development mood
  try {
    // start loading screen here
    dispatch({type: ActionType.SIGN_IN_LOADING, payload: true});
    //call our sign in route
    const response = await api.post('/auth/login', {email, password});

    // validation error
    if (response.data?.status) {
      //dispatch error to store it inside redux
      dispatch({
        type: ActionType.AUTH_ERROR_MESSAGE,
        payload: response.data?.message,
      });
    }
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
