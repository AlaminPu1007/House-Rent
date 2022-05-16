/**
 * Auth Related action define here
 */

import {ActionType} from './AuthActionCreator';
import store from '../store';
//distract dispatch from store
const {dispatch} = store;

//Increment goes here
export const IncMethod = () => {
  // dispatch({type: ActionType.INCREMENT_OPERATION, payload: 1});
  dispatch({
    type: ActionType.PUSH_TEST_OBJECT,
    payload: {name: 'al-amin', value: 'some value'},
  });
};

//Decrement method goes here
export const DecMethod = () => {
  dispatch({type: ActionType.DECREMENT_OPERATION, payload: 1});
};
