import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
// import { config } from '@/libs/config';
import ReactDOM from 'react-dom';
import App from '@/components/App';

ReactDOM.render(<App />, document.getElementById('my_react_app'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
