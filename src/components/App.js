import React, { Component } from 'react';
import '../assets/scss/index.scss';
import Header from './Header';
import Home from './Home';
import 'materialize-css/dist/css/materialize.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
