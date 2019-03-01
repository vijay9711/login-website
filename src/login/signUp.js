import React, { Component } from 'react';
import './sigin.css'
import md5 from 'c:/Users/vijis/node_modules/md5'
import axios from 'c:/Users/vijis/node_modules/axios';

class SignUp extends Component {
    state = {
        name: '',
        username: '',
        password: '',
        re_password: '',
        Age: '',
        Email: '',
        contact_no: '',
        Togg: false,
    }
    changeName = (event) => {
        this.setState({ name: event.target.value })

    }
    changeUserName = (event) => {
        this.setState({ username: event.target.value });
    }
    changepassword = (event) => {
        this.setState({ password: md5(event.target.value) });
    }
    changerepassword = (event) => {
        this.setState({ re_password: md5(event.target.value) });
    }
    changeEmail = (event) => {
        this.setState({ Email: event.target.value });
    }
    changeContact = (event) => {
        this.setState({ contact_no: event.target.value });
    }
    changeAge = (event) => {
        this.setState({ Age: event.target.value });
    }
    submit = (event) => {
        event.preventDefault();
        const { name, username, password, re_password, Age, Email, contact_no } = this.state
        axios.post('http://localhost:3004/userdata', { name, username, password, re_password, Age, Email, contact_no })
            .then(res => {
                console.log("res", res.data)
            })
    }
    render() {
        return (
            <React.Fragment>
                <header><h6>Add your information</h6></header>
                <div className="signup-box">
                    <h5 className="h5" ><strong>Name:</strong></h5>
                    <input type="text" onChange={this.changeName} className="sinput" required></input>
                    <h5 className="h5"><strong>Username:</strong></h5>
                    <input type="text" onChange={this.changeUserName} className="sinput"></input>
                    <h5 className="h5"><strong>Password</strong></h5>
                    <input type="password" onChange={this.changepassword} className="sinput"></input>
                    <h5 className="h5"><strong>Re-enter Password</strong></h5>
                    <input type="password" onChange={this.changerepassword} className="sinput"></input>
                    <h5 className="h5"><strong>Age</strong></h5>
                    <input type="age" onChange={this.changeAge} className="sinput"></input>
                    <h5 className="h5"><strong>E-mail</strong></h5>
                    <input type="email" onChange={this.changeEmail} className="sinput"></input>
                    <h5 className="h5"><strong>Contact Number</strong></h5>
                    <input type="number" onChange={this.changeContact} className="sinput"></input>
                    <button type="submit" className="sbutton" onClick={(event) => this.submit(event)}>Submit</button>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUp;