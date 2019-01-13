import React, { Component } from 'react';
import '../../assets/scss/home/welcome.scss';
import Header from "../header";
import { Col, Row, Input, Button } from "react-materialize";


class Welcome extends Component {
    render() {
        return(
            <div>
                <div className="header-img">
                    <Header/>
                    <Row>
                        <Col xs={5} m={5}  offset="m1">
                            <div className="shadow devis block">
                                <h1>Simulation de devis</h1>
                                <Row>
                                    <Input s={6} type='select' label='Type de projet' icon='person_pin' defaultValue='1'>
                                        <option value='1'>Personnel</option>
                                        <option value='2'>Professionnel</option>
                                        <option value='3'>Associatif</option>
                                        <option value='4'>Autre</option>
                                    </Input>
                                    <Input s={6} type='select' label="Étude du besoin" icon='public' defaultValue='1'>
                                        <option value='1'>Site Internet Vitrine</option>
                                        <option value='2'>Site Internet Blog</option>
                                        <option value='3'>Site Internet E-Commerce</option>
                                        <option value='4'>Site Internet Spécifique</option>
                                        <option value='5'>Améliorations Web</option>
                                        <option value='6'>Autre(s) besoin(s)</option>
                                    </Input>
                                </Row>
                                <Row className="row-with-p">
                                    <Col s={7}><p> <i className="material-icons">cloud_circle</i>Avez-vous un hébergement web ?</p></Col>
                                    <Col s={5}>
                                        <Input s={6} name='group1' type='radio' value='yesHosting' label='Oui' />
                                        <Input s={6} name='group1' type='radio' value='noHoSting' label='Non' />
                                    </Col>
                                </Row>
                                <Row className="row-with-p">
                                    <Col s={7}><p> <i className="material-icons">code</i>Besoin d'un référencement ?</p></Col>
                                    <Col s={5}>
                                        <Input s={6} name='group2' type='radio' value='yesSEO' label='Oui' />
                                        <Input s={6} name='group2' type='radio' value='noSEO' label='Non' />
                                    </Col>
                                </Row>
                                <Row className="row-with-p">
                                    <Col s={7}><p> <i className="material-icons">whatshot</i>Service(s) supplémentaire(s) ?</p></Col>
                                    <Col s={5}>
                                        <Input s={6} name='group3' type='checkbox' value='yesLogo' className='filled-in' label='Logo' />
                                        <Input s={6} name='group3' type='checkbox' value='yesFlyers' className='filled-in' label='Flyers'/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Input s={6} type='select' label='Délai de réalisation' icon='timer' defaultValue='1'>
                                        <option value='1'>Urgent</option>
                                        <option value='2'>Mois d'un mois</option>
                                        <option value='3'>Moins de 3 mois</option>
                                        <option value='4'>Moins d'un an</option>
                                    </Input>
                                    <Input s={6} type='select' label="Montant du budget" icon='euro_symbol' defaultValue='1'>
                                        <option value='1'>Moins de 500 €</option>
                                        <option value='2'>Entre 500€ et 1000€</option>
                                        <option value='3'>Entre 1000€ et 2000€</option>
                                        <option value='4'>Plus de 2000€</option>
                                    </Input>
                                </Row>
                                <Row className="row-with-button">
                                    <Col s={12} m={6} className="center promo"><p>Utiliser un code promotionnel</p></Col>
                                    <Button s={12} m={6}>Simuler le devis</Button>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Welcome;

