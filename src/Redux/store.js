// store.js

import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
// import { userSignup, userLogin } from './authThunks';

const store = configureStore({
  reducer: {
    user:authSlice
  },
});



export default store;
