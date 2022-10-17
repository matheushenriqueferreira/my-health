import { createSlice } from "@reduxjs/toolkit";

export const nextVaccinationSlice = createSlice({
  name: 'nextVaccination',
  initialState:{
    nextVaccination: []
  },
  reducers: {
    setNextVaccination: (state, action) => {
      state.nextVaccination = action.payload;
    },
    clearNextVaccination: (state) => {
      state.nextVaccination.splice();
    }
  }
});

export const { setNextVaccination, clearNextVaccination } = nextVaccinationSlice.actions;
export default nextVaccinationSlice.reducer;