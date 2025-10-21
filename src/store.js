// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit'

// Slice for flight booking
const flightSlice = createSlice({
  name: 'flights',
  initialState: {
    searchResults: [],
    booking: null,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload
    },
    setBooking: (state, action) => {
      state.booking = action.payload
    },
  },
})

export const { setSearchResults, setBooking } = flightSlice.actions

export const store = configureStore({
  reducer: {
    flights: flightSlice.reducer,
  },
})
