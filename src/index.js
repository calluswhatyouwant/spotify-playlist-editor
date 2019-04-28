/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';

import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>,
        rootElement
    );
}
