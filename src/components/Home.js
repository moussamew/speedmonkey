import React, { Component } from 'react';
import '../assets/scss/home.scss';
import Web from '../assets/img/illustrations/web.svg'; // Illustration n°1 //
import Technology from './Home/Technology' // Liste des plus récentes technologies sous forme d'icones //
import Introduction from './Home/Introduction' // Introduction des sections Création ; Référencement ; Hébergement //
import Avantages from './Home/Avantages' // Avantages à rejoindre Speedmonkey //

class Home extends Component {

  render() {

    return (
      <div>
        <div className="row home fadeIn">
           <div className="col s12 m5 offset-m1">
              <h1>Concevez, référencez et hebergez votre site web avec <span className="span-green-home">SpeedMonkey</span></h1>
              <p className="description">Chaque projet web est <strong>unique</strong>, et mérite le <strong>meilleur</strong>.
              Chez Speedmonkey, nous vous proposons une <strong>solution technique sur-mesure</strong> adapté à votre besoin.</p>
              <div className="center">
                <a href="/" className="button btn-home hvr-buzz">Profitez de nos avantages</a>
                <p className="support">Gratuit. Support 24/7.</p>
              </div>
           </div>
           <div className="col s12 m5 center mt-25">
              <img src={Web} alt="Avec Speedmonkey, vous êtes entre de bonnes mains." className="illustration"/>
           </div>
        </div>
        <Technology />
        <Introduction />
        <Avantages />
      </div>
    )

  }
}

export default Home;
