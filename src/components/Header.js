import React, { Component } from 'react';
import '../assets/scss/index.scss';
import Logo from '../assets/img/logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src={Logo} alt="SpeedMonkey" className="logo"/>
          <div className="navigation">
            <h1>Réalisations</h1>
            <h1>Explorer le site</h1>
            <button>Simuler son devis</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
