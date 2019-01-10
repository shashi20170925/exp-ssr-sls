import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Home} from './components/Home';

ReactDOM.hydrate(<Home />, document.querySelector('#root'));