import React, { Component } from 'react';
import Suivi from '../../assets/img/avantages/build.svg';
import SuiviSelected from '../../assets/img/avantages/buildSelected.svg';


class Avantages extends Component {
  constructor(props){
    super(props);
    this.state = {
      suivi: false
    }

    this.hoverSuivi = this.hoverSuivi.bind(this);

  }

  hoverSuivi(){ this.setState({ suivi: !this.state.suivi }) }

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
            <div className="col s2 box">
              <p>Accompagnement et suivi personnalisé de votre projet.</p>
            </div>
            <div className="col s2 box">
              <p>Accompagnement et suivi personnalisé de votre projet.</p>
            </div>
            <div className="col s2 box">
              <p>Accompagnement et suivi personnalisé de votre projet.</p>
            </div>
          </div>
          <div className="mt100"></div>
        </div>
      </div>
    )

  }
}

export default Avantages;
