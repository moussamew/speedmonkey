import React, { Component } from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/scss/home/home.scss';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <p>Bonjour.</p>
        <img src={logo} className="App-logo" alt="react"/>
      </div>
    );
  }
}

export default Home;
