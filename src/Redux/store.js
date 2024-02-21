// store.js






import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import articleSlice from './articleSlice';
// import { userSignup, userLogin } from './authThunks';

const store = configureStore({
  reducer: {
    user:authSlice,
    articles: articleSlice
  },
});



export default store;
