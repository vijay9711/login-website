import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Page from './login/page'

import Page from './login/page';
//import Home from './login/home';
//import Member from './Home/member';
//import Help from './Home/help';
class App extends Component {

  render() {
    return (
      <div>
        <Page></Page>
        {/*    <Home></Home>
        <Member></Member>
        <Help></Help> */}
      </div>
    );
  }
}

export default App;
