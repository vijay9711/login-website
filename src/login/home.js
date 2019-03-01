import React, { Component } from 'react';

import Data from '../Data/memberDetails';
//import MemData from '../Data/member.json';
import './home.css';
//import profile from '../Data/profile.png';
import SideBar from './sidebar';
//import Nav from '../site/nav'
import Table from '../Home/HomeTable';
import Footer from '../Home/footer';
import Carousel from '../Home/HomeCarousel';
import ProfileCard from '../Home/profileCard';


class Home extends Component {
    state = {
        Id: this.props.match.params,
        posts: []
    }
    nav = (event) => {
        const Id = this.props.match.params;

        const user = Data[Id.id]
        this.props.history.push('/' + event.target.name + '/' + user.id)
    }
    /* componentDidMount() {
        let url = "http://localhost:3002/posts"
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                const posts = data.map((rows) => {
                    return (
                        <div>
                            <h3 key={rows.id}>{rows.id}</h3>
                            <h4>Name: {rows.email}</h4>
                        </div>
                    )
                })
                this.setState({ posts: posts });
            })
    } */

    render() {
        //const Id = this.props.match.params;
        //const user = Data[Id.id]

        return (
            <React.Fragment>
                {/*    {this.state.posts}  */}
                <header>
                    <SideBar OnNav={this.nav} Id={this.state.Id}></SideBar>
                </header>
                <Carousel />
                <div className="cont">
                    <div className="dis">
                        <Table />
                    </div>
                    <div className="dis">
                        <ProfileCard Id={this.state.Id} />
                    </div>
                </div>
                <Footer />
            </React.Fragment >

        );
    }
}

export default Home;