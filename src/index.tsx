import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
// import { config } from '@/libs/config';
import { init } from 'emailjs-com';
import ReactDOM from 'react-dom';
import App from '@/components/App';

init('user_0KyLQMYYIeHGPU6I0N4vt');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('my_react_app'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
