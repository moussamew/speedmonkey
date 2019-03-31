import React, { Component } from 'react';
import '../assets/scss/home.scss';
import Web from '../assets/img/illustrations/web.svg'; // Illustration n°1 //
import Creation from '../assets/img/illustrations/creation.svg'; // Illustration n°2 //
import Referencement from '../assets/img/illustrations/referencement.svg'; // Illustration n°3 //
import Hebergement from '../assets/img/illustrations/hebergement.svg'; // Illustration n°4 //
import Quote from '../assets/img/quote.svg'
import Technology from './Home/Technology' // Liste des plus récentes technologies sous forme d'icones //

class Home extends Component {

  render() {

    return (
      <div>
        <div className="row home">
           <div className="col s12 m5 offset-m1">
              <h1>Concevez, référencez et hebergez votre site web avec SpeedMonkey</h1>
              <p className="description">Chaque projet web est unique, et mérite le meilleur.
              Chez Speedmonkey, nous vous proposons une solution technique sur-mesure adapté à votre besoin.</p>
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
        <div className="row home bg-blue mt100">
          <div className="col s12 m5 offset-m1 center mt55 mb100">
              <img src={Creation} alt="Création et refonte de site web" className="illustration"/>
          </div>
          <div className="col s12 m5 mt80">
            <img alt="Quote" src={Quote} />
            <h2>Nous concrétisons votre projet de <br /><span className="span-red">création</span> ou de <span className="span-red">refonte</span> de site web</h2>
            <p className="description">Chaque projet web est unique, et mérite le meilleur.
            Chez Speedmonkey, nous vous proposons une solution technique sur-mesure adapté à votre besoin.</p>
            <a href="/" className="button btn-section btn-red hvr-icon-push">Réaliser son site web
              <i className="material-icons hvr-icon icon">code</i>
            </a>
          </div>
        </div>
        <div className="row home mt20">
          <div className="col s12 m5 offset-m1 mt60">
            <img alt="Quote" src={Quote} />
            <h2>Nous renforçons efficacement le <br/><span className="span-purple">référencement</span> de votre site web</h2>
            <p className="description">Chaque projet web est unique, et mérite le meilleur.
            Chez Speedmonkey, nous vous proposons une solution technique sur-mesure adapté à votre besoin.</p>
            <a href="/" className="button btn-section btn-purple hvr-icon-spin">Mieux référencer son site web
              <i className="material-icons hvr-icon icon">cached</i>
            </a>
          </div>
          <div className="col s12 m5 center mt35">
              <img src={Referencement} alt="Référencement de site web" className="illustration"/>
          </div>
        </div>
        <div className="row home bg-blue mt100">
          <div className="col s12 m5 offset-m1 center mt55 mb100">
              <img src={Hebergement} alt="Hébergement de site web" className="illustration"/>
          </div>
          <div className="col s12 m5 mt80">
            <img alt="Quote" src={Quote} />
            <h2>Nous vous proposons un <span className="span-green">hébergement</span> <br/>de qualité pour votre site web</h2>
            <p className="description">Chaque projet web est unique, et mérite le meilleur.
            Chez Speedmonkey, nous vous proposons une solution technique sur-mesure adapté à votre besoin.</p>
            <a href="/" className="button btn-section btn-green hvr-icon-buzz">Héberger son site web
              <i className="material-icons hvr-icon icon">cloud_circle</i>
            </a>
          </div>
        </div>
      </div>
    )

  }
}

export default Home;
