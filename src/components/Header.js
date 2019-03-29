import React, { Component } from 'react';
import '../assets/scss/index.scss';
import Logo from '../assets/img/logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src={Logo} alt="SpeedMonkey" className="logo hvr-wobble-vertical"/>
          <div className="navigation">
            <h1 className="header">Réalisations</h1>
            <h1 className="header">Explorer le site</h1>
            <a href="/" className="button btn-nav hvr-wobble-horizontal">Simuler son devis</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
