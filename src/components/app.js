import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./home/home";
import Header from "./header";
import Error from "./error";
import '../assets/scss/home/welcome.scss';

const Test = () => {
    return(
        <div className="bg-test">
            <Header />
        </div>
    )
};

class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/test" component={Test} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
