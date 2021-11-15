import { combineReducers, createStore } from 'redux';
import { TodoReducer } from './reducers';

const store = createStore(combineReducers({
    TodoReducer
}));

export default store;