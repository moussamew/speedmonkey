import React, { Component } from 'react';
import '../assets/scss/home/home.scss';
import { Row, Col } from 'react-materialize';
import Speedy from "../assets/img/logo.svg";
import HamburgerMenu from "react-hamburger-menu";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return(
            <div>
                <img src={Speedy} alt="Speedmonkey" className="logo"/>
                <div className="desktop-visible header">
                    <Row>
                        <Col>Concept</Col>
                        <Col>Solutions</Col>
                        <Col>Réalisations</Col>
                        <Col>Blog</Col>
                        <Col>Faire un Devis</Col>
                    </Row>
                </div>
                <div className="mobile-visible hamburger">
                    <HamburgerMenu
                        isOpen={this.state.open}
                        menuClicked={this.handleClick.bind(this)}
                        width={25}
                        height={20}
                        strokeWidth={2}
                        color='white'
                        animationDuration={0.5}
                    />
                </div>
            </div>
        )
    }
}

export default Header;