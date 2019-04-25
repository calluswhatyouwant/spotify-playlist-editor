/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App';

import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(<App />, rootElement);
}
