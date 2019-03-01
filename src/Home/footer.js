import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "c:/Users/vijis/node_modules/mdbreact";

class Footer extends Component {
    state = {}
    render() {
        return (
            <MDBFooter color="blue" className="font-small pt-4 mt-7">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">How can I help you</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.</p>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Contact us</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="www.google.com">Google</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;