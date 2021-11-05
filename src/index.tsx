import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { init } from 'emailjs-com';
import { config } from '@/libs/config.example';
import App from '@/components/App';

init(config.EMAILJS_USER_ID);

ReactDOM.render(<App />, document.getElementById('question_tree'));
