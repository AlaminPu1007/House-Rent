import {createStore} from 'redux';
import rootReducers from './RootReducers';

//define our store with all reducers
const store = createStore(rootReducers);

//get our all dispatch
// export type appDispatch = typeof store.dispatch;

export default store;
