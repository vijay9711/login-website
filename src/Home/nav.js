import React, { Component } from 'react';
import '../login/home.css';
//import Data from '../Data/memberDetails';
import logo from '../Data/logoPeace.jpg';

class Nav extends Component {
    state = {}
    render() {
        return (
            <div>
                {<nav className="nav">
                    <ul className="navul" >
                        <li className="navulli"><button className="navbut" name='home' onClick={(name) => this.props.OnNav(name)}>Home</button></li>
                        <li className="navulli"><button className="navbut" name='member' onClick={(name) => this.props.OnNav(name)}>members</button></li>
                        <li className="navulli"><button className="navbut" name='support' onClick={(event) => this.props.OnNav(event)}>support</button></li>
                        <li className="navulli"><button className="navbut" name='help' onClick={(name) => this.props.OnNav(name)}>help</button></li>
                        <img className="Peaceimg" src={logo} alt="Peace" ></img>
                    </ul>
                </nav>}
            </div>
        );
    }
}

export default Nav;