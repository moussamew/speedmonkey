import React, { Component } from 'react';
import '../assets/scss/coming.scss';
import Speedy from "../assets/img/logo.svg";
import { Row, Input, Col, Button } from 'react-materialize';

class Coming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      error: '',
    }
  }

  updateMail = (e) => {
    this.setState({
      mail: e.target.value,
      error: ''
    })
  }

  handleMail = (e) => {
    var mail = this.state.mail;
    var regEx = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    if (regEx.test(mail)) {
      this.setState({
        error: false
      })
    } else {
      this.setState({
        error: true
      })
    }

  }

  render() {
    return(
      <div className="coming-soon">
        <img src={Speedy} alt="Coming soon"/>
        <h1>Notre site internet est en cours de développement, nous serons bientôt disponible!</h1>
        <h2>Inscrivez-vous dès maintenant pour être alerté de son ouverture.</h2>
        <Row>
          <Col s={2}></Col>
          <Input s={8} onChange={this.updateMail} label="Adresse e-mail" />
        </Row>
        <Button waves='light' onClick={this.handleMail}>S'abonner</Button>
        <div className={this.state.error  === true ? 'error-mail' : 'hidden'}>
            <p>Votre adresse mail n'existe pas, ou n'est pas valide !</p>
        </div>
        <div className={this.state.error === false ? 'success-mail' : 'hidden'}>
            <p>Votre adresse mail "{this.state.mail}" a bien été enregistré, nous vous contacterons dès l'ouverture du site.</p>
        </div>
      </div>
    )
  }
}

export default Coming;
