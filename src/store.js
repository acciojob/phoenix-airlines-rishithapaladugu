// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
    flights: [],
    bookingDetails: {}
};

// Reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FLIGHTS':
            return {
                ...state,
                flights: action.payload
            };
        case 'BOOK_FLIGHT':
            return {
                ...state,
                bookingDetails: action.payload
            };
        default:
            return state;
    }
};

// Create store
const store = createStore(reducer);

export default store;
