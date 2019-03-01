import React, { Component } from 'react';
//import Nav from './nav';
import Data from '../Data/memberDetails.json'
import SideBar from '../login/sidebar';
import Footer from '../Home/footer';
import '../login/home.css'
//import axios from 'c:/Users/vijis/node_modules/axios';

class Support extends Component {
    state = {
        Id: this.props.match.params,
        posts: [],
        name: '',
        email: '',
        age: '',
    }

    nav = (event) => {
        const Id = this.props.match.params;
        console.log("ID is", Id)
        const user = Data[Id.id]
        this.props.history.push('/' + event.target.name + '/' + user.id)
    }

    upload = (event) => {
        event.preventDefault()
    }
    render() {
        return (<div>
            <header>
                <SideBar OnNav={this.nav} Id={this.state.Id}></SideBar>
            </header>
            <form onSubmit={this.upload}>
                <div className="supportform">
                    <h1>support</h1>
                    <h5><strong>UserName:</strong></h5>
                    <input type="text" className="input" onClick={this.changeUsername}></input>
                    <h5><strong>email: </strong></h5>
                    <input type="text" className="input" onClick={this.changeEmail}></input>
                    <h5><strong>age:</strong></h5>
                    <input type="number" className="input" onClick={this.changeAge}></input><br></br>
                    <button type="submit" className="sbutton" onClick={this.upload}>Upload</button>
                </div>
            </form>
            <footer>
                <Footer></Footer>
            </footer>
        </div>);
    }
}

export default Support;