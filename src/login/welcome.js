import React, { Component } from 'react';

class Welcome extends Component {
    state = {}
    path = (event) => {
        if (event.target.name === 'login') {
            this.props.history.push('/page');
        }
        else if (event.target.name === 'signup') {
            this.props.history.push('/signup');
        }
    }
    render() {
        return (
            <div>
                <button type="button" name='login' onClick={this.path}>Login</button>
                <button type="button" name='signup' onClick={this.path}>Sign Up</button>
            </div>
        );
    }
}

export default Welcome;