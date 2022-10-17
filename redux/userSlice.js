import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userIdRedux: '',
    userEmailRedux: '',
    userNameRedux: ''
  },
  reducers: {
    login: (state, action) => {
      const {id, email, name} = action.payload
      state.userIdRedux = id;
      state.userEmailRedux = email;
      state.userNameRedux = name;
    },
    logout: (state) => {
      state.userIdRedux = '';
      state.userEmailRedux = '';
      state.userNameRedux = '';
    }
  },
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;