import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import bookingSlice from "./bookingSlice";
export const store = configureStore({
  reducer: { search: searchSlice, booking: bookingSlice },
});
