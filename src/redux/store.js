import { createStore } from 'redux';
import flightReducer from './reducers';

const store = createStore(flightReducer);

export default store;
