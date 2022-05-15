import {combineReducers} from 'redux';
import authReducer from './authRedux/AuthReducer';
// our all reducer goes here,
//create Reducers will give you ability to work with one to more reducers with
//their action
const rootReducers = combineReducers({
  //auth reducer define here
  authReducer,
});

export default rootReducers;
//This RootState is required to use useSelector later on
export type RootState = ReturnType<typeof rootReducers>;
