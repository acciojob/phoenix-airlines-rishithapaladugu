export const SET_BOOKING_DETAILS = 'SET_BOOKING_DETAILS';
export const CONFIRM_BOOKING = 'CONFIRM_BOOKING';
export const RESET_BOOKING = 'RESET_BOOKING';

export const setBookingDetails = (details) => ({
  type: SET_BOOKING_DETAILS,
  payload: details
});

export const confirmBooking = (bookingData) => {
  return (dispatch) => {
    // Generate a booking confirmation number
    const confirmationNumber = 'PA' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    const confirmedBooking = {
      ...bookingData,
      confirmationNumber,
      bookingDate: new Date().toISOString(),
      status: 'confirmed'
    };

    dispatch({
      type: CONFIRM_BOOKING,
      payload: confirmedBooking
    });
  };
};

export const resetBooking = () => ({
  type: RESET_BOOKING
});
