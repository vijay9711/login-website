import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './login/path';
//import App from './App'
/* import Page from './login/page';
import Home from './login/home';
import Member from '../src/site/member';
 */
ReactDOM.render(<BrowserRouter>
    <div>
        <Routes>
        </Routes>
    </div>
</BrowserRouter >, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
