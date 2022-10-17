import { createSlice } from '@reduxjs/toolkit'

export const vaccineSlice = createSlice({
  name: 'vaccine',
  initialState: {
    idRedux: '',
    userIdRedux: '',
    dateRedux: '',
    vaccineRedux: '',
    doseRedux: '',
    imageRedux: '',
    nextDateRedux: '',
    latitudeRedux: '',
    longitudeRedux: ''
  },
  reducers: {
    editVaccine: (state, action) => {
      const {id, vaccineName, userId, vaccineImageUrl, vaccineDate, nextVaccinationDate, dose, latitude, longitude} = action.payload;
      state.idRedux = id;
      state.userIdRedux = userId;
      state.imageRedux = vaccineImageUrl;
      state.dateRedux = vaccineDate;
      state.vaccineRedux = vaccineName;
      state.nextDateRedux = nextVaccinationDate;
      state.doseRedux = dose;
      state.latitudeRedux = latitude;
      state.longitudeRedux = longitude;
    },
  },
})

export const {editVaccine} = vaccineSlice.actions;
export default vaccineSlice.reducer;