import React, { Component } from 'react';
import { Row, Col } from 'react-materialize';
import Speedy from "../assets/img/logo.svg";

class Header extends Component {
    render() {
        return(
            <div>
                <img src={Speedy} alt="Speedmonkey" className="logo"/>
                <div className="header">
                    <Row>
                        <Col>Concept</Col>
                        <Col>Solutions</Col>
                        <Col>Réalisations</Col>
                        <Col>Blog</Col>
                        <Col>Faire un Devis</Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Header;