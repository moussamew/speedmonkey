import React, { Component } from 'react';
import Speedy from '../../src/assets/img/speedy.svg';
import { Row, Col } from 'react-materialize';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <img src={ Speedy } alt="Speedy" className="speedy"/>
                <Row>
                    <Col>Concept</Col>
                    <Col>Solutions</Col>
                    <Col>Réalisations</Col>
                    <Col>Blog</Col>
                    <Col>Faire un Devis</Col>
                </Row>
            </div>
        )
    }
}

export default Header;