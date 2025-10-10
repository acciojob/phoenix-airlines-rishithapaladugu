import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slice/bookingSlice';

export default configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
