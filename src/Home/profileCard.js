import React, { Component } from 'react';
// import axios from 'axios';

class ProCards extends Component {
    state = {
        id: this.props.Id,
        User: [],
    }
    // componentDidMount() {
    //     //const Id = this.state.id;
    //     axios.get("http://localhost:3004/userdata")
    //         .then(res => {
    //             const pers = res.data[this.state.id.id];
    //             this.setState({ User: pers });
    //         })

    // }
    account = (event) => {
        event.preventDefault();
        const id = this.state.id;
        console.log("ID is ", id)
        this.props.history.push('/account/' + id)
    }
    render() {
        const { User } = this.state;
        return (
            <div className="card">
                <h1>profile</h1>
                <div className="inUserCard">
                    <img></img>
                    <h1>Name: {User.name}</h1>
                    <h1>Age: {User.Age}</h1>
                    <h1>ID: {User.id}</h1>
                    <button type="button" onClick={(event) => this.account(event)} >More..</button>
                </div>

            </div>
        );
    }
}

export default ProCards;