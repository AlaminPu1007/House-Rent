/**
 * Auth Related action define here
 */

import {ActionType} from './AuthActionCreator';
import store from '../store';
//distract dispatch from store
const {dispatch} = store;

//Increment goes here
export const IncMethod = () => {
  dispatch({type: ActionType.INCREMENT_OPERATION, payload: 1});
};
