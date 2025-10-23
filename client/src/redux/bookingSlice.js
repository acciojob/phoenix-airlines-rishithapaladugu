import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    selectedFlight: null,
    selectedReturn: null,
    passenger: {},
  },
  reducers: {
    setSelectedFlight: (state, action) => {
      state.selectedFlight = action.payload.flight;
      state.selectedReturn = action.payload.returnFlight || null;
    },
    setPassenger: (state, action) => {
      state.passenger = action.payload;
    },
  },
});

export const { setSelectedFlight, setPassenger } = bookingSlice.actions;
export default bookingSlice.reducer;
