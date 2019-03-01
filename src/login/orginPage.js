import React, { Component } from 'react';
import './login.css';
import Data from '../Data/memberDetails.json';
//import Home from './home'
//import Routes from '../login/path';
import { NavLink } from 'react-router-dom';

class Page extends Component {
    state = {
        userName: '',
        password: '',
        id: '',

    }

    handleUserName = (event) => {
        this.setState({ userName: event.target.value });
        //console.log("UN", this.state.userName);
    }

    handlePassword = (event) => {
        this.setState({ password: event.target.value });
        //console.log("PA", this.state.password);
    }

    show = (event) => {
        event.preventDefault();
        const user = Data.filter(data => (data.username === this.state.userName && data.password === this.state.password));
        console.log("Username", user);
        const userlen = user.length;
        //console.log("len", user[0].id);
        if (this.state.userName !== '' && this.state.password !== '') {
            if (userlen > 0 && userlen === 1) {
                if (user[0].username === this.state.userName && user[0].password === this.state.password) {
                    this.setState({ id: user[0].id });
                    console.log("Welcome user");
                }
            }
            else {
                console.log("acess denied");
            }
        }
        else {
            return (
                <div>
                    <h1>enter username and password</h1>
                </div>
            );

        }

    }
    user = () => {
        const id = this.state.id;
        console.log("PAge function id is", id)
        return (
            <NavLink to={'/home/' + id}  >Login</NavLink>
        );
    }
    reff = () => {
        console.log("Refresh");
    }

    render() {
        /* const id = this.state;
        console.log("PAge state id check", id)
        const user = <NavLink to={'/home/' + id} >Login</NavLink> */
        return (
            <div>

                <header className="">
                    <h1>Login here!</h1>
                </header>
                <form>
                    <div className="log-box">
                        <div className="log-box-in"  >
                            <h1 className="h1">Login</h1>
                            <h5>UserName:</h5>

                            <input type="text" onChange={this.handleUserName} value={this.state.userName} className="input"  ></input>
                            <h5>Password:</h5>
                            <input type="text" onChange={this.handlePassword} value={this.state.password} className="input"  ></input><br></br>

                            <button align="center" type="submit" onClick={this.show} className="button" >{this.user()}</button>
                            <button align="center" onClick={this.reff} className="button">Cancle</button>
                        </div>
                    </div>
                </form>

            </div >);
    }
}

export default Page;