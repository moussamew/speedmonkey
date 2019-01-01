import React, { Component } from 'react';
import '../../assets/scss/home/welcome.scss';
import Header from "../header";


class Welcome extends Component {
    render() {
        return(
            <div className="welcome">
                <Header/>
            </div>
        )
    }
}

export default Welcome;

