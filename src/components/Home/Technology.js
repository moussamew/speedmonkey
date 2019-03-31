import React, { Component } from 'react';
import Shopify from '../../assets/img/technology/shopify.svg';
import Reactjs from '../../assets/img/technology/react.svg';
import WordPress from '../../assets/img/technology/wordpress.svg';
import Vuejs from '../../assets/img/technology/vue.svg';
import PrestaShop from '../../assets/img/technology/prestashop.svg';
import Angular from '../../assets/img/technology/angular.svg';
import Drupal from '../../assets/img/technology/drupal.svg';
import Symfony from '../../assets/img/technology/symfony.svg';

class Technology extends Component {
  constructor(props){
    super(props);
    this.state = {
      shopify: false,
      react: false,
      wordpress: false,
      vue: false,
      prestashop: false,
      angular: false,
      symfony: false
    }

    this.hoverShopify = this.hoverShopify.bind(this);
    this.hoverReact = this.hoverReact.bind(this);
    this.hoverWordpress = this.hoverWordpress.bind(this);
    this.hoverVue = this.hoverVue.bind(this);
    this.hoverPrestashop = this.hoverPrestashop.bind(this);
    this.hoverAngular = this.hoverAngular.bind(this);
    this.hoverDrupal = this.hoverDrupal.bind(this);
    this.hoverSymfony = this.hoverSymfony.bind(this);

  }

  hoverShopify(){ this.setState({ shopify: !this.state.shopify }) }

  hoverReact(){ this.setState({ react: !this.state.react }) }

  hoverWordpress(){ this.setState({ wordpress: !this.state.wordpress }) }

  hoverVue(){ this.setState({ vue: !this.state.vue }) }

  hoverPrestashop(){ this.setState({ prestashop: !this.state.prestashop }) }

  hoverAngular(){ this.setState({ angular: !this.state.angular }) }

  hoverDrupal(){ this.setState({ drupal: !this.state.drupal }) }

  hoverSymfony(){ this.setState({ symfony: !this.state.symfony }) }

  render(){

    const shopifySelected = this.state.shopify ? "selected shopify col s1 offset-s2" : "shopify col s1 offset-s2";
    const reactSelected = this.state.react ? "selected react col s1" : "react col s1";
    const wordpressSelected = this.state.wordpress ? "selected wordpress col s1" : "wordpress col s1";
    const vueSelected = this.state.vue ? "selected vue col s1" : "vue col s1";
    const prestashopSelected = this.state.prestashop ? "selected prestashop col s1" : "prestashop col s1";
    const angularSelected = this.state.angular ? "selected angular col s1" : "angular col s1";
    const drupalSelected = this.state.drupal ? "selected drupal col s1" : "drupal col s1";
    const symfonySelected = this.state.symfony ? "selected symfony col s1" : "symfony col s1";

    return (
      <div className="row">
        <div className="technology center">
          <p>Nous maîtrisons les plus récentes technologies pour répondre toujours plus efficacement à vos besoins.</p>
          <div className={shopifySelected}>
            <img src={Shopify} alt="Shopify" className="shopify hvr-pulse" onMouseEnter={this.hoverShopify} onMouseLeave={this.hoverShopify}/>
            <p>Shopify</p>
          </div>
          <div className={reactSelected}>
            <img src={Reactjs} alt="React.js" className="react hvr-pulse" onMouseEnter={this.hoverReact} onMouseLeave={this.hoverReact}/>
            <p>React.js</p>
          </div>
          <div className={wordpressSelected}>
            <img src={WordPress} alt="WordPress" className="wordpress hvr-pulse" onMouseEnter={this.hoverWordpress} onMouseLeave={this.hoverWordpress}/>
            <p>WordPress</p>
          </div>
          <div className={vueSelected}>
            <img src={Vuejs} alt="Vue.js" className="vue hvr-pulse" onMouseEnter={this.hoverVue} onMouseLeave={this.hoverVue}/>
            <p>Vue.js</p>
          </div>
          <div className={prestashopSelected}>
            <img src={PrestaShop} alt="PrestaShop" className="prestashop hvr-pulse" onMouseEnter={this.hoverPrestashop} onMouseLeave={this.hoverPrestashop}/>
            <p>PrestaShop</p>
          </div>
          <div className={angularSelected}>
            <img src={Angular} alt="PrestaShop" className="angular hvr-pulse" onMouseEnter={this.hoverAngular} onMouseLeave={this.hoverAngular}/>
            <p>Angular</p>
          </div>
          <div className={drupalSelected}>
            <img src={Drupal} alt="Drupal" className="drupal hvr-pulse" onMouseEnter={this.hoverDrupal} onMouseLeave={this.hoverDrupal}/>
            <p>Drupal</p>
          </div>
          <div className={symfonySelected}>
            <img src={Symfony} alt="Drupal" className="symfony hvr-pulse" onMouseEnter={this.hoverSymfony} onMouseLeave={this.hoverSymfony}/>
            <p>Symfony</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Technology;
