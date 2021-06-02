import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {getCurrencies} from './services/requests.js';

getCurrencies();

ReactDOM.render(<App />, document.getElementById('root'));
