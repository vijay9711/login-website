import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Page from './page';
//import App from '../App';
import Data from '../Data/memberDetails.json';
import Member from '../Home/member';
import Support from '../Home/support';
import Help from '../Home/help';
import Welcome from '../login/welcome';
import SignUp from './signUp';
import Account from '../Home/account';
class Routes extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    {/* <Route path='/' component={App} exact></Route> */}
                    <Route path='/' component={Welcome} exact ></Route>
                    <Route path='/signup' component={SignUp} ></Route>
                    <Route path='/page' component={Page}></Route>
                    <Route path='/home/:id' component={Home} data={Data.id}></Route>
                    <Route path='/member/:id' component={Member} data={Data.id}></Route>
                    <Route path='/support/:id' component={Support} data={Data.id}></Route>
                    <Route path='/help/:id' component={Help} data={Data.id}></Route>
                    <Route path='/account/:id' component={Account} data={Data.id}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;