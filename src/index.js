//import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {makeMainRoutes} from './App';
const routes = makeMainRoutes();
ReactDOM.render(routes, document.getElementById('root'));
//registerServiceWorker();
