import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import flightReducer from './reducers/flightReducer';
import bookingReducer from './reducers/bookingReducer';

const rootReducer = combineReducers({
  flights: flightReducer,
  booking: bookingReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
