import React, { Component } from 'react';
import Suivi from '../../assets/img/avantages/build.svg';
import SuiviSelected from '../../assets/img/avantages/buildSelected.svg';
import Technology from '../../assets/img/avantages/technology.svg';
import TechnologySelected from '../../assets/img/avantages/technologySelected.svg';
import Database from '../../assets/img/avantages/database.svg';
import DatabaseSelected from '../../assets/img/avantages/databaseSelected.svg';
import Print from '../../assets/img/avantages/print.svg';
import PrintSelected from '../../assets/img/avantages/printSelected.svg';


class Avantages extends Component {
  constructor(props){
    super(props);
    this.state = {
      suivi: false,
      technology: false,
      database: false,
      print: false,
      showSuivi: "",
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
      showSuivi: "",
      showTechnology: "hidden",
      showDatabase: "hidden",
      showPrint: "hidden"
    })
  }

  showTechnology() {
    this.setState({
      showSuivi: "hidden",
      showTechnology: "",
      showDatabase: "hidden",
      showPrint: "hidden"
    })
  }

  showDatabase() {
    this.setState({
      showSuivi: "hidden",
      showTechnology: "hidden",
      showDatabase: "",
      showPrint: "hidden"
    })
  }

  showPrint() {
    this.setState({
      showSuivi: "hidden",
      showTechnology: "hidden",
      showDatabase: "hidden",
      showPrint: ""
    })
  }

  render(){

    const ClickSuivi = this.state.showSuivi === "" ? "offset-s2 col s2 boxSelected" : "offset-s2 col s2 box";
    const ClickTechnology = this.state.showTechnology === "" ? "col s2 boxSelected" : "col s2 box";
    const ClickDatabase = this.state.showDatabase === "" ? "col s2 boxSelected" : "col s2 box";
    const ClickPrint = this.state.showPrint === "" ? "col s2 boxSelected" : "col s2 box";

    return(
      <div>
        <div className="center avantages mt50">
          <p><i class="material-icons icon">trending_up</i> <span>Vos avantages à créer votre site en ligne chez Speedmonkey :</span></p>
          <div className="row mt50">
            <div className={ClickSuivi} onMouseEnter={this.hoverSuivi} onMouseLeave={this.hoverSuivi} onClick={this.showSuivi}>
              <img src={this.state.suivi || this.state.showSuivi === "" ? SuiviSelected : Suivi } alt="Suivi personnalisé"/>
              <p>Accompagnement et suivi personnalisé de votre projet.</p>
            </div>
            <div className={ClickTechnology} onMouseEnter={this.hoverTechnology} onMouseLeave={this.hoverTechnology} onClick={this.showTechnology}>
              <img src={this.state.technology || this.state.showTechnology === ""? TechnologySelected : Technology } alt="Technologies récentes"/>
              <p>Technologies récentes et adaptés à votre projet web.</p>
            </div>
            <div className={ClickDatabase} onMouseEnter={this.hoverDatabase} onMouseLeave={this.hoverDatabase} onClick={this.showDatabase}>
              <img src={this.state.database || this.state.showDatabase === "" ? DatabaseSelected : Database } alt="Serveurs sécurisés"/>
              <p>Serveurs réactifs, sécurisés et hébergés en France.</p>
            </div>
            <div className={ClickPrint} onMouseEnter={this.hoverPrint} onMouseLeave={this.hoverPrint} onClick={this.showPrint}>
              <img src={this.state.print || this.state.showPrint === "" ? PrintSelected : Print } alt="Flyers, cartes de visites, bannière publicitaires.."/>
              <p>Flyers, cartes de visites et bannières sur-mesure.</p>
            </div>
          </div>
          <div className="mt100">
            <div className={this.state.showSuivi}>
              <p>Accompagnement et suivi personnalisé de votre projet.</p>
            </div>
            <div className={this.state.showTechnology}>
              <p>Technologies récentes et adaptés à votre projet web.</p>
            </div>
            <div className={this.state.showDatabase}>
              <p>Serveurs réactifs, sécurisés et hébergés en France.</p>
            </div>
            <div className={this.state.showPrint}>
              <p>Flyers, cartes de visites et bannières sur-mesure.</p>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Avantages;
