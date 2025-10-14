import { SEARCH_FLIGHTS, SET_FLIGHT_TYPE, SET_SEARCH_PARAMS } from '../actions/flightActions';

const initialState = {
  flights: [],
  flightType: 'one-way',
  searchParams: {
    from: '',
    to: '',
    departureDate: '',
    returnDate: ''
  },
  loading: false,
  error: null
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHT_TYPE:
      return {
        ...state,
        flightType: action.payload
      };
    
    case SET_SEARCH_PARAMS:
      return {
        ...state,
        searchParams: { ...state.searchParams, ...action.payload }
      };
    
    case SEARCH_FLIGHTS:
      return {
        ...state,
        flights: action.payload,
        loading: false
      };
    
    default:
      return state;
  }
};

export default flightReducer;
