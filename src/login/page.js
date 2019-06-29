import React, { Component } from 'react';
import './login.css';
//import Data from '../Data/memberDetails.json';
import axios from 'axios';
import md5 from 'md5';
class Page extends Component {
    state = {
        userName: '',
        password: '',
        Id: '',
        Data: [],
        togg: true,
    }
    handleUserName = (event) => {
        this.setState({ userName: event.target.value });
    }

    handlePassword = (event) => {
        this.setState({ password: md5(event.target.value) });
    }

    getdata = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:3004/userdata`)
            .then(res => {
                const persons = res.data;
                this.setState({ Data: persons });
                console.log("Data is", this.state.Data)
                const user = this.state.Data.filter(data => (data.username === this.state.userName && data.password === this.state.password));
                //const user = this.state.Data.map(userdata => userdata.username)
                //console.log("user is ", user);
                const userlen = user.length;
                console.log("len", userlen);
                if (this.state.userName !== '' && this.state.password !== '') {
                    if (userlen > 0 && userlen === 1) {
                        if (user[0].username === this.state.userName && user[0].password === this.state.password) {
                            console.log("Welcome user", user[0].id);
                            this.props.history.push('/home/' + user[0].id);
                        }
                    }
                    else {
                        return (
                            window.alert("Incorrect password or username")
                        );
                    }
                }
                else {
                    console.log("no value")
                    this.setState({ togg: false })
                }
                event.preventDefault();

            })



    }
    none = () => {
        this.setState({ togg: true })
        return (
            window.alert("Enter password and username")
        );
    }

    render() {
        return (
            <div>

                <header className="header">
                    <h1>Login here!</h1>
                </header>
                <form>
                    <div className="log-box">
                        <div className="log-box-in"  >
                            <h1 className="h1">Login</h1>
                            <h5>{this.state.togg ? null : this.none()}</h5>
                            <h5><strong>UserName:</strong></h5>
                            <input type="text" onChange={this.handleUserName} value={this.state.userName} className="input" required></input>
                            <h5><strong>Password:</strong></h5>
                            <input type="password" onChange={this.handlePassword} className="input" required></input>
                            <button align="center" type="submit" onClick={(event) => this.getdata(event)} className="button" >Login</button>
                            <button align="center" type="button" onClick={this.reff} className="button">Cancle</button>
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}

export default Page;

/*class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            Id: '',

            togg: true,

        }
        this.show = this.show.bind(this);

    }

    handleUserName = (event) => {
        this.setState({ userName: event.target.value });
    }

    handlePassword = (event) => {
        this.setState({ password: md5(event.target.value) });
    }

    show = (event) => {
        event.preventDefault();
        this.setState({ togg: true });
        const user = Data.filter(data => (data.username === this.state.userName && data.password === this.state.password));
        console.log("Username", user);
        const userlen = user.length;
        console.log("len", userlen);
        if (this.state.userName !== '' && this.state.password !== '') {
            if (userlen > 0 && userlen === 1) {
                if (user[0].username === this.state.userName && user[0].password === this.state.password) {
                    console.log("Welcome user");
                    this.props.history.push('/home/' + user[0].id);
                }
            }
            else {
                return (
                    window.alert("Incorrect password or username")
                );
            }
        }
        else {
            console.log("no value")
            this.setState({ togg: false })
        }
        event.preventDefault();

    }
    none = () => {
        this.setState({ togg: true })
        return (
            window.alert("Enter password and username")
        );

    }
    render() {
        return (
            <div>

                <header className="header">
                    <h1>Login here!</h1>
                </header>
                <form>
                    <div className="log-box">
                        <div className="log-box-in"  >
                            <h1 className="h1">Login</h1>
                            <h5>{this.state.togg ? null : this.none()}</h5>
                            <h5><strong>UserName:</strong></h5>
                            <input type="text" onChange={this.handleUserName} value={this.state.userName} className="input" required></input>
                            <h5><strong>Password:</strong></h5>
                            <input type="password" onChange={this.handlePassword} className="input" required></input>
                            <button align="center" type="submit" onClick={(event) => this.show(event)} className="button" >Login</button>
                            <button align="center" type="button" onClick={this.reff} className="button">Cancle</button>
                        </div>
                    </div>
                </form>
            </div >);
    }
}

export default Page; */