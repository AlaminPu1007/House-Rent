/**
 * Auth Related action define here
 */

import {ActionType} from './AuthActionCreator';
import store from '../store';
//distract dispatch from store
const {dispatch} = store;
import api from '../../Api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Automatic sign in process
export const AutomaticSignIn = async () => {
  try {
    // get token form local storage
    const token = await AsyncStorage.getItem('token');
    //if token is present then set it
    if (token) {
      dispatch({type: ActionType.AUTH_TOKEN, payload: token});
    } else {
      dispatch({type: ActionType.AUTH_TOKEN, payload: ''});
    }
  } catch (AutomaticSignInError: any) {
    if (__DEV__) {
      console.log(
        AutomaticSignInError.message,
        'AutomaticSignInError from auth redux',
      );
    }
  }
};

//all sign in props defined here
type signInProps = {
  email: string;
  password: string;
};

//Increment goes here
export const SignInProcess = async ({email, password}: signInProps) => {
  //its run only in development mood
  try {
    //need to be clear our error
    dispatch({
      type: ActionType.AUTH_ERROR_MESSAGE,
      payload: ' ',
    });

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
    } else {
      //store token inside store with local storage
      await AsyncStorage.setItem('token', response.data);
      // set token in side our redux also
      dispatch({type: ActionType.AUTH_TOKEN, payload: response.data});
    }
    // end loading screen here
    dispatch({type: ActionType.SIGN_IN_LOADING, payload: false});
  } catch (signInPropsError: any) {
    // end loading screen here
    dispatch({type: ActionType.SIGN_IN_LOADING, payload: false});

    //need to be store error
    dispatch({
      type: ActionType.AUTH_ERROR_MESSAGE,
      payload: 'Something went wrong.please try again later',
    });

    if (__DEV__) {
      console.log(signInPropsError.message, 'from auth action sign in process');
    }
  }
  dispatch({
    type: ActionType.SIGN_IN_OPERATION,
    payload: {email, password},
  });
};

// interface of sign up props
type signUpProps = {
  name: string;
  email: string;
  password: string;
};

/**
 * New user create method goes here
 */
export const SignUpProcess = async ({name, email, password}: signUpProps) => {
  //make body
  const body = {
    name,
    email,
    password,
  };
  try {
    //need to be clear our error
    dispatch({
      type: ActionType.AUTH_ERROR_MESSAGE,
      payload: '',
    });
    // start loading screen here
    dispatch({type: ActionType.SIGN_IN_LOADING, payload: true});

    const response = await api.post('/auth/register', body);

    // validation error
    if (response.data?.status) {
      //dispatch error to store it inside redux
      dispatch({
        type: ActionType.AUTH_ERROR_MESSAGE,
        payload: response.data?.message,
      });
    } else {
      //store token inside store with local storage
      await AsyncStorage.setItem('token', response.data.token);
      // set token in side our redux also
      dispatch({type: ActionType.AUTH_TOKEN, payload: response.data.token});
    }

    // end loading screen here
    dispatch({type: ActionType.SIGN_IN_LOADING, payload: false});
  } catch (SignUpProcessError: any) {
    // end loading screen here
    dispatch({type: ActionType.SIGN_IN_LOADING, payload: false});
    //need to be store error
    dispatch({
      type: ActionType.AUTH_ERROR_MESSAGE,
      payload: 'Something went wrong.please try again later',
    });

    if (__DEV__) {
      console.log(
        SignUpProcessError.message,
        'sign up process from auth action method ',
      );
    }
  }
};

//Log out method goes here
export const LogOut = async () => {
  try {
    //remove token from local storage
    await AsyncStorage.removeItem('token');
    // set token in side our redux also
    dispatch({type: ActionType.AUTH_TOKEN, payload: ''});
  } catch (LogOutError: any) {
    if (__DEV__) {
      console.log(LogOutError.message, 'from auth action method');
    }
  }
};
