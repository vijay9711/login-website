import React, { Component } from 'react';
import SideNav, { MenuIcon, } from 'c:/Users/vijis/node_modules/react-simple-sidenav';
import './sidebar.css';
import logo from '../Data/logoPeace.jpg';
import Data from '../Data/memberDetails.json'
import axios from 'c:/Users/vijis/node_modules/axios';

class SideBar extends Component {
    state = {
        id: this.props.Id,
        User: [],
    }
    componentDidMount() {
        //console.log("id of props is", this.state.id)
        //const Id = this.state.id;
        axios.get("http://localhost:3004/userdata")
            .then(res => {
                const pers = res.data[this.state.id.id];
                this.setState({ User: pers });
                console.log(" axios USer is", this.state.User)
            })

    }
    render() {
        const Id = this.props.Id;
        const user = Data[Id.id]
        // console.log("user is", user)
        return (
            <div>
                <header>

                    <p className="h6">{this.state.User.username}</p>
                    <img className="Peaceimg" src={logo} alt="Peace" ></img>
                    <MenuIcon align="center" onClick={() => this.setState({ showNav: true })} />

                    <SideNav
                        showNav={this.state.showNav}
                        onHideNav={() => this.setState({ showNav: false })}
                        title="Menu"
                        items={[
                            <nav className="nav">
                                <ol className="navul" >
                                    <ul className="navulli"><button className="button" name='home' onClick={(name) => this.props.OnNav(name)}>Home</button></ul>
                                    <ul className="navulli"><button className="button" name='member' onClick={(name) => this.props.OnNav(name)}>members</button></ul>
                                    <ul className="navulli"><button className="button" name='support' onClick={(event) => this.props.OnNav(event)}>support</button></ul>
                                    <ul className="navulli"><button className="button" name='help' onClick={(name) => this.props.OnNav(name)}>help</button></ul>

                                </ol>
                            </nav>
                        ]}
                        titleStyle={{ backgroundColor: 'rgb(30, 144, 255)', opacity: '0.4', padding: '0px', }}

                        onShowNav={[<img className="Peaceimg" src={logo} alt="Peace" ></img>]}
                    >

                    </SideNav>

                </header>
            </div >
        );
    }
}

export default SideBar;
