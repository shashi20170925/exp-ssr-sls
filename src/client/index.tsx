import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from '../client/Routes'
import {BrowserRouter} from 'react-router-dom';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducers from './reducers';

const store=createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));