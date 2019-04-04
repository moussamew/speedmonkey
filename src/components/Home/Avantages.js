import React, { Component } from 'react';
import Suivi from '../../assets/img/avantages/build.svg';
import SuiviSelected from '../../assets/img/avantages/buildSelected.svg';
import Technology from '../../assets/img/avantages/technology.svg';
import TechnologySelected from '../../assets/img/avantages/technologySelected.svg';
import Database from '../../assets/img/avantages/database.svg';
import DatabaseSelected from '../../assets/img/avantages/databaseSelected.svg';


class Avantages extends Component {
  constructor(props){
    super(props);
    this.state = {
      suivi: false,
      technology: false,
      database: false
    }

    this.hoverSuivi = this.hoverSuivi.bind(this);
    this.hoverTechnology = this.hoverTechnology.bind(this);
    this.hoverDatabase = this.hoverDatabase.bind(this);

  }

  hoverSuivi(){ this.setState({ suivi: !this.state.suivi }) }

  hoverTechnology() { this.setState({ technology: !this.state.technology })}

  hoverDatabase() { this.setState({ database: !this.state.database }) }

  render(){

    return(
      <div>
        <div className="center avantages mt50">
          <p><i class="material-icons icon">trending_up</i> <span>Vos avantages à créer votre site en ligne chez Speedmonkey :</span></p>
          <div className="row mt50">
            <div className="offset-s2 col s2 box" onMouseEnter={this.hoverSuivi} onMouseLeave={this.hoverSuivi}>
              <img src={this.state.suivi ? SuiviSelected : Suivi } alt="Suivi personnalisé"/>
              <p>Accompagnement et suivi personnalisé de votre projet.</p>
            </div>
            <div className="col s2 box" onMouseEnter={this.hoverTechnology} onMouseLeave={this.hoverTechnology}>
              <img src={this.state.technology ? TechnologySelected : Technology } alt="Technologies récentes"/>
              <p>Technologies récentes et adaptés à votre projet web.</p>
            </div>
            <div className="col s2 box" onMouseEnter={this.hoverDatabase} onMouseLeave={this.hoverDatabase}>
              <img src={this.state.database ? DatabaseSelected : Database } alt="Serveurs sécurisés"/>
              <p>Serveurs réactifs, sécurisés et hébergés en France.</p>
            </div>
            <div className="col s2 box">
              <p>Formules .</p>
            </div>
          </div>
          <div className="mt100"></div>
        </div>
      </div>
    )

  }
}

export default Avantages;
