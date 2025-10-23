import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    type: "one-way",
    source: "",
    destination: "",
    date: "",
    returnDate: "",
  },
  reducers: {
    setSearch: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
