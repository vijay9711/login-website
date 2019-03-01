import React, { Component } from 'react';
//import Nav from './nav';
import Data from '../Data/memberDetails.json'
import SideBar from '../login/sidebar';
import Footer from '../Home/footer';

class Help extends Component {
    state = {
        Id: this.props.match.params
    }
    nav = (event) => {
        const Id = this.props.match.params;
        console.log("ID is", Id)
        const user = Data[Id.id]
        this.props.history.push('/' + event.target.name + '/' + user.id)
    }
    render() {
        return (<div>
            <header>
                <SideBar OnNav={this.nav} Id={this.state.Id}></SideBar>

            </header>
            <h1>Help</h1>
            <footer>
                <Footer></Footer>
            </footer>
        </div>);
    }
}

export default Help;