import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import vaccineSlice from './vaccineSlice';
import nextVaccinationSlice from './nextVaccinationSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    vaccine: vaccineSlice,
    nextVaccination: nextVaccinationSlice
  },
})