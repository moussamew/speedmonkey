import React, { Component } from 'react';
import '../assets/scss/coming.scss';
import '../assets/scss/loader.scss';
import Speedy from '../assets/img/logo.svg';
import btnMail from '../assets/img/mail.svg';
import { Row, Input, Col, Button } from 'react-materialize';
import { database } from '../config/firebase';
import firebase from 'firebase/app';
require('firebase/database');

class Coming extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      message: '',
      nbMail: ''
    }
  }

  componentDidMount(){
    // Fonction qui récupère le nombre d'entrées en base de données
    firebase.database().ref().child("mails").orderByChild("mail").once("value").then((snapshot) => {
      var nbMail = snapshot.numChildren();
      this.setState({
        nbMail: nbMail
      })
    })
  }

  updateMail = (e) => {
    this.setState({
      mail: e.target.value,
      message: ''
    })
  }

  handleMail = (e) => {
    var userMail = this.state.mail;
    var mailExist = false;
    var regEx = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

    // Vérifier si le champs texte est bel est bien une adresse mail
    if (regEx.test(userMail)) {
      // Vérifier si l'adresse mail existe déjà en base de données
      firebase.database().ref().child("mails").orderByChild("mail").equalTo(userMail).on("value", function(snapshot) {
        if (snapshot.exists()) { mailExist = true; }
        else {
          const postmail = { mail: userMail };
          database.push(postmail);
          mailExist = false;
        }
      });

      // Afficher message d'erreur ou de succes si l'adresse mail existe en base de données ou non
      if(mailExist) {
        this.setState({
          message: 'mailExist'
        })
      } else {
        this.setState({
          message: 'success'
        })
      }

    } else {
      this.setState({
        message: 'error'
      })
    }
  }

  render() {
    var mailUsers;

    if (this.state.nbMail === '') {
      mailUsers =
      <div className="speed-loader">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>;
    } else {
      mailUsers = <p>Participants : {this.state.nbMail} / 100 utilisateurs.</p>;
    }

    return(
      <div className="coming-soon">
        <img src={Speedy} alt="Coming soon"/>
        <h1>Notre site internet est en cours de développement, nous serons bientôt disponible!</h1>
        <h2>Inscrivez-vous dès maintenant pour être alerté de son ouverture.</h2>
        <Row>
          <Col s={2}></Col>
          <Input s={8} onChange={this.updateMail} label="Adresse e-mail" />
        </Row>
        <Row className="row-mail">
          {mailUsers}
          <Button s={10} waves='light' onClick={this.handleMail}>S'abonner</Button>
        </Row>
        <div className={this.state.message  === 'error' ? 'error-mail' : 'hidden'}>
            <p>Votre adresse mail n'est pas valide !</p>
        </div>
        <div className={this.state.message  === 'mailExist' ? 'error-mail' : 'hidden'}>
            <p>Votre adresse mail existe déjà chez nous !</p>
        </div>
        <div className={this.state.message === 'success' ? 'success-mail' : 'hidden'}>
            <p>Merci ! Nous vous contacterons prochainement !</p>
        </div>
        <div className="btn-mail">
          <a href="mailto:hello@speedmonkey.fr">
      			<img src={btnMail} alt="Envoyez moi un mail"/>
      		</a>
        </div>

      </div>
    )
  }
}

export default Coming;
