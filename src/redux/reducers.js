import { SEARCH_FLIGHTS, BOOK_FLIGHT } from './actions';

const initialState = {
    flights: [],
    booking: {},
};

const flightReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FLIGHTS:
            return { ...state, flights: action.payload };
        case BOOK_FLIGHT:
            return { ...state, booking: action.payload };
        default:
            return state;
    }
};

export default flightReducer;
