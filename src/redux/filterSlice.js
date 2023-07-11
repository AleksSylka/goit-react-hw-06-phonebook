import { createSlice } from "@reduxjs/toolkit";


const filtersInitialState = {
  queryFilter: '',
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
      setQueryFilter(state, action) {
      state.queryFilter = action.payload;
    },
  },
});

export const { setQueryFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;