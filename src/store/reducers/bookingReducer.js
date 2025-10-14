import { SET_BOOKING_DETAILS, CONFIRM_BOOKING, RESET_BOOKING } from '../actions/bookingActions';

const initialState = {
  selectedFlight: null,
  passengerDetails: {
    name: '',
    email: '',
    phone: ''
  },
  confirmedBooking: null,
  loading: false,
  error: null
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING_DETAILS:
      return {
        ...state,
        ...action.payload
      };
    
    case CONFIRM_BOOKING:
      return {
        ...state,
        confirmedBooking: action.payload,
        loading: false
      };
    
    case RESET_BOOKING:
      return {
        ...initialState
      };
    
    default:
      return state;
  }
};

export default bookingReducer;
