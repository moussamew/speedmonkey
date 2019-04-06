import React, { Component } from 'react';
import Suivi from '../../assets/img/avantages/build.svg';
import SuiviSelected from '../../assets/img/avantages/buildSelected.svg';
import Technology from '../../assets/img/avantages/technology.svg';
import TechnologySelected from '../../assets/img/avantages/technologySelected.svg';
import Database from '../../assets/img/avantages/database.svg';
import DatabaseSelected from '../../assets/img/avantages/databaseSelected.svg';
import Print from '../../assets/img/avantages/print.svg';
import PrintSelected from '../../assets/img/avantages/printSelected.svg';
import Quote from '../../assets/img/quote.svg';
import ShowSuivi from '../../assets/img/avantages/showSuivi.svg';
import ShowTechnology from '../../assets/img/avantages/showTechnology.svg';
import ShowDatabase from '../../assets/img/avantages/showDatabase.svg';
import ShowPrint from '../../assets/img/avantages/showPrint.svg';


class Avantages extends Component {
  constructor(props){
    super(props);
    this.state = {
      suivi: false,
      technology: false,
      database: false,
      print: false,
      showSuivi: "fadeIn",
      showTechnology: "hidden",
      showDatabase: "hidden",
      showPrint: "hidden"
    }

    this.hoverSuivi = this.hoverSuivi.bind(this);
    this.hoverTechnology = this.hoverTechnology.bind(this);
    this.hoverDatabase = this.hoverDatabase.bind(this);
    this.hoverPrint = this.hoverPrint.bind(this);

    this.showSuivi = this.showSuivi.bind(this);
    this.showTechnology = this.showTechnology.bind(this);
    this.showDatabase = this.showDatabase.bind(this);
    this.showPrint = this.showPrint.bind(this);

  }

  hoverSuivi(){ this.setState({ suivi: !this.state.suivi }) }

  hoverTechnology() { this.setState({ technology: !this.state.technology })}

  hoverDatabase() { this.setState({ database: !this.state.database }) }

  hoverPrint() { this.setState({ print: !this.state.print }) }

  showSuivi() {
    this.setState({
      showSuivi: "fadeIn",
      showTechnology: "hidden",
      showDatabase: "hidden",
      showPrint: "hidden"
    })
  }

  showTechnology() {
    this.setState({
      showSuivi: "hidden",
      showTechnology: "fadeIn",
      showDatabase: "hidden",
      showPrint: "hidden"
    })
  }

  showDatabase() {
    this.setState({
      showSuivi: "hidden",
      showTechnology: "hidden",
      showDatabase: "fadeIn",
      showPrint: "hidden"
    })
  }

  showPrint() {
    this.setState({
      showSuivi: "hidden",
      showTechnology: "hidden",
      showDatabase: "hidden",
      showPrint: "fadeIn"
    })
  }

  render(){

    const ClickSuivi = this.state.showSuivi === "fadeIn" ? "offset-s2 col s2 boxSelected" : "offset-s2 col s2 box";
    const ClickTechnology = this.state.showTechnology === "fadeIn" ? "col s2 boxSelected" : "col s2 box";
    const ClickDatabase = this.state.showDatabase === "fadeIn" ? "col s2 boxSelected" : "col s2 box";
    const ClickPrint = this.state.showPrint === "fadeIn" ? "col s2 boxSelected" : "col s2 box";

    return(
      <div>
        <div className="center avantages mt50">
          <p><i class="material-icons icon">trending_up</i> <span>Vos avantages à créer votre site en ligne chez Speedmonkey :</span></p>
          <div className="row mt50">
            <div className={ClickSuivi} onMouseEnter={this.hoverSuivi} onMouseLeave={this.hoverSuivi} onClick={this.showSuivi}>
              <img src={this.state.suivi || this.state.showSuivi === "fadeIn" ? SuiviSelected : Suivi } alt="Suivi personnalisé"/>
              <p>Accompagnement et suivi personnalisé de votre projet.</p>
            </div>
            <div className={ClickTechnology} onMouseEnter={this.hoverTechnology} onMouseLeave={this.hoverTechnology} onClick={this.showTechnology}>
              <img src={this.state.technology || this.state.showTechnology === "fadeIn" ? TechnologySelected : Technology } alt="Technologies récentes"/>
              <p>Technologies récentes et adaptés à votre projet web.</p>
            </div>
            <div className={ClickDatabase} onMouseEnter={this.hoverDatabase} onMouseLeave={this.hoverDatabase} onClick={this.showDatabase}>
              <img src={this.state.database || this.state.showDatabase === "fadeIn" ? DatabaseSelected : Database } alt="Serveurs sécurisés"/>
              <p>Serveurs réactifs, sécurisés et hébergés en France.</p>
            </div>
            <div className={ClickPrint} onMouseEnter={this.hoverPrint} onMouseLeave={this.hoverPrint} onClick={this.showPrint}>
              <img src={this.state.print || this.state.showPrint === "fadeIn" ? PrintSelected : Print } alt="Flyers, cartes de visites, bannière publicitaires.."/>
              <p>Flyers, cartes de visites et bannières sur-mesure.</p>
            </div>
          </div>
        </div>
        <div className="row home mt50">
          <div className={this.state.showSuivi}>
            <div className="col s12 m5 offset-m1 center">
                <img src={ShowSuivi} alt="Création et refonte de site web" className="illustration"/>
            </div>
            <div className="col s12 m5">
              <img alt="Quote" src={Quote} />
              <h2 className="h2-blue">Accompagnement et suivi personnalisé <br/>de votre projet web par nos équipes</h2>
              <p className="description">Un hébergement <strong>stable et performant</strong> est un critère pris en compte par <strong>Google</strong> pour le référencement de votre site internet.
               <br/>C'est pourquoi nous sommes très attaché à l'idée de vous proposer des solutions d'hébergement web <strong>sécurisés</strong>, <strong>performantes</strong> et <strong>réactives</strong>.</p>
              <a href="/" className="button btn-section btn-blue hvr-icon-rotate">Consulter nos offres
                <i className="material-icons hvr-icon icon">description</i>
              </a>
            </div>
          </div>
          <div className={this.state.showTechnology}>
            <div className="col s12 m5 offset-m1 center">
                <img src={ShowTechnology} alt="Création et refonte de site web" className="illustration"/>
            </div>
            <div className="col s12 m5">
              <img alt="Quote" src={Quote} />
              <h2 className="h2-blue">Technologies récentes et adaptés <br/>à votre site en ligne</h2>
              <p className="description">Un hébergement <strong>stable et performant</strong> est un critère pris en compte par <strong>Google</strong> pour le référencement de votre site internet.
               <br/>C'est pourquoi nous sommes très attaché à l'idée de vous proposer des solutions d'hébergement web <strong>sécurisés</strong>, <strong>performantes</strong> et <strong>réactives</strong>.</p>
              <a href="/" className="button btn-section btn-blue hvr-icon-rotate">Consulter nos offres
                <i className="material-icons hvr-icon icon">description</i>
              </a>
            </div>
          </div>
          <div className={this.state.showDatabase}>
            <div className="col s12 m5 offset-m1 center">
                <img src={ShowDatabase} alt="Création et refonte de site web" className="illustration"/>
            </div>
            <div className="col s12 m5">
              <img alt="Quote" src={Quote} />
              <h2 className="h2-blue">Serveurs réactifs, sécurisés et hebergés <br/>en France</h2>
              <p className="description">Un hébergement <strong>stable et performant</strong> est un critère pris en compte par <strong>Google</strong> pour le référencement de votre site internet.
               <br/>C'est pourquoi nous sommes très attaché à l'idée de vous proposer des solutions d'hébergement web <strong>sécurisés</strong>, <strong>performantes</strong> et <strong>réactives</strong>.</p>
              <a href="/" className="button btn-section btn-blue hvr-icon-rotate">Consulter nos offres
                <i className="material-icons hvr-icon icon">description</i>
              </a>
            </div>
          </div>
          <div className={this.state.showPrint}>
            <div className="col s12 m5 offset-m1 center">
                <img src={ShowPrint} alt="Création et refonte de site web" className="illustration"/>
            </div>
            <div className="col s12 m5">
              <img alt="Quote" src={Quote} />
              <h2 className="h2-blue">Flyers, cartes de visites et bannières <br/>sur-mesure.</h2>
              <p className="description">Un hébergement <strong>stable et performant</strong> est un critère pris en compte par <strong>Google</strong> pour le référencement de votre site internet.
               <br/>C'est pourquoi nous sommes très attaché à l'idée de vous proposer des solutions d'hébergement web <strong>sécurisés</strong>, <strong>performantes</strong> et <strong>réactives</strong>.</p>
              <a href="/" className="button btn-section btn-blue hvr-icon-rotate">Consulter nos offres
                <i className="material-icons hvr-icon icon">description</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Avantages;
