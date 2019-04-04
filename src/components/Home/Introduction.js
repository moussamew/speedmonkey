import React, { Component } from 'react';
import Quote from '../../assets/img/quote.svg' // Utilisation des Quote //
import Creation from '../../assets/img/illustrations/creation.svg'; // Illustration n°2 //
import Referencement from '../../assets/img/illustrations/referencement.svg'; // Illustration n°3 //
import Hebergement from '../../assets/img/illustrations/hebergement.svg'; // Illustration n°4 //

class Introduction extends Component {

  render(){

    return(
      <div>
        <div className="row home bg-blue mt80">
          <div className="col s12 m5 offset-m1 center mt55 mb100">
              <img src={Creation} alt="Création et refonte de site web" className="illustration"/>
          </div>
          <div className="col s12 m5 mt80">
            <img alt="Quote" src={Quote} />
            <h2>Nous concrétisons votre projet de <br /><span className="span-red">création</span> ou de <span className="span-red">refonte</span> de site web</h2>
            <p className="description">Vous avez un projet de création de site web <strong>e-commerce</strong>, <strong>vitrine</strong>, <strong>catalogue</strong>, <strong>sur-mesure</strong> ou bien une <strong>rénovation</strong> ?
            <br/>Nous répondons à votre besoin en apportant une <strong>solution technique adapté</strong> et un <strong>suivi personnalisé</strong>.</p>
            <a href="/" className="button btn-section btn-red hvr-icon-push">Réaliser son site web
              <i className="material-icons hvr-icon icon">code</i>
            </a>
          </div>
        </div>
        <div className="row home mt20">
          <div className="col s12 m5 offset-m1 mt60">
            <img alt="Quote" src={Quote} />
            <h2>Nous renforçons efficacement le <br/><span className="span-purple">référencement</span> de votre site internet</h2>
            <p className="description">Nous optimisons votre site web afin d'améliorer son <strong>positionnement</strong> dans les <strong>moteurs de recherche</strong>.
            <br/>La <strong>méthodologie SEO</strong> appliquée permet d'augmenter de manière significative le <strong>nombre de visites</strong> et les <strong>taux de conversion</strong> de votre site en ligne.</p>
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
            <h2>Nous vous proposons un <span className="span-green">hébergement</span> <br/>de qualité pour votre site en ligne</h2>
            <p className="description">Un hébergement <strong>stable et performant</strong> est un critère pris en compte par <strong>Google</strong> pour le référencement de votre site internet.
             <br/>C'est pourquoi nous sommes très attaché à l'idée de vous proposer des solutions d'hébergement web <strong>sécurisés</strong>, <strong>performantes</strong> et <strong>réactives</strong>.</p>
            <a href="/" className="button btn-section btn-green hvr-icon-buzz">Héberger son site web
              <i className="material-icons hvr-icon icon">cloud_circle</i>
            </a>
          </div>
        </div>
      </div>
    )

  }

}

export default Introduction;
