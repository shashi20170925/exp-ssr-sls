import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from '../client/Routes'
import {BrowserRouter} from 'react-router-dom';

ReactDOM.hydrate(
    <BrowserRouter>
    <Routes />
    </BrowserRouter>, document.querySelector('#root'));