import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Products from './products/Products'
import {Employee} from './Employee';
import Bangalore from './Bangalore';
import Hospital from './Hospital';
import Users from './Users/Users';
import Products1 from './Products1';
import Products3 from './children/Products3';
import Products4 from './methodref/Products4';
import Addition from './my2way/Addition';
import Average from './Average';
import Card from './Creditcard/Card';
ReactDOM.render(<Card/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
