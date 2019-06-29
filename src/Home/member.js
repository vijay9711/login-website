import React, { Component } from 'react';
//import ReactTable from 'c:/Users/vijis/node_modules/react-table';
//import Data from '../Data/member';
//import Nav from './nav';
import Data from '../Data/memberDetails.json'
import SideBar from '../login/sidebar';
import Footer from '../Home/footer';
import axios from 'axios';

class Member extends Component {
    state = {
        Id: this.props.match.params,
        posts: []
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
            <h1>member</h1>
            {this.state.posts}
            <footer>
                <Footer></Footer>
            </footer>
        </div>);
    }
}

export default Member;