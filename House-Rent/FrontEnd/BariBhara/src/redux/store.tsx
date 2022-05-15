import {createStore} from 'redux';
import rootReducers from './RootReducers';

//define our store with all reducers
const store = createStore(rootReducers);

export default store;
