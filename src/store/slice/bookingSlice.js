import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lastBooking: null,
  searchResults: [],
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    setLastBooking(state, action) {
      state.lastBooking = action.payload;
    },
    clearBooking(state) {
      state.lastBooking = null;
    }
  }
});

export const { setSearchResults, setLastBooking, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
