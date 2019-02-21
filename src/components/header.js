import React, { Component } from 'react';
import '../assets/scss/header.scss';
import { Row } from 'react-materialize';
import { NavLink } from "react-router-dom";
import Speedy from "../assets/img/logo.svg";
import HamburgerMenu from "react-hamburger-menu";

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: true
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState( {
                open: false
            })
        }, 1);
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
                        <NavLink to="/"><p className={this.props.location.pathname === '/' ? "selected-item" : "navbar-item"}>Accueil</p></NavLink>
                        <NavLink to="/solutions"><p className={this.props.location.pathname.startsWith('/solutions') ? "selected-item" : "navbar-item"}>Solutions</p></NavLink>
                        <NavLink to="/"><p>Réalisations</p></NavLink>
                        <NavLink to="/"><p>Blog</p></NavLink>
                        <NavLink to="/l"><p>Faire un Devis</p></NavLink>
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
                <div className={!this.state.open ? "hidden" : "navbar-mobile fade-in"} onClick={this.handleClick}>
                    <NavLink to="/"><h1 className={this.props.location.pathname === '/' ? "selected first" : "first"}>Accueil</h1></NavLink>
                    <NavLink to="/solutions"><h1 className={this.props.location.pathname.startsWith('/solutions') ? "selected" : ""}>Solutions</h1></NavLink>
                    <NavLink to="/"><h1>Réalisations</h1></NavLink>
                    <NavLink to="/"><h1>Articles</h1></NavLink>
                    <NavLink to="/err"><h1 className="last">Faire un Devis <i className="material-icons">arrow_forward</i></h1></NavLink>
                </div>
            </div>
        )
    }
}

export default Header;
