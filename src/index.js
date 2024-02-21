import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Provider } from 'react-redux';
import store from './Redux/store';


// const firebaseConfig = {
//   apiKey: "AIzaSyDB2N9Te1lpOS_XaulxTTl2z7iRWELFDVk",
//   authDomain: "bimrely.firebaseapp.com",
//   projectId: "bimrely",
//   storageBucket: "bimrely.appspot.com",
//   messagingSenderId: "159112337542",
//   appId: "1:159112337542:web:423a037bcec9332651d907",
//   measurementId: "${config.measurementId}"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
ReactDOM.render(
  <Provider store={store}>
    <App />
 </Provider>,
  document.getElementById('root')
);

