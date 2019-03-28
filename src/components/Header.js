import React, { Component } from 'react';
import '../assets/scss/index.scss';
import Logo from '../assets/img/logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="SpeedMonkey" className="logo"/>
      </div>
    );
  }
}

export default Header;
