import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./home/home";
import Header from "./header";
import Error from "./error";
import '../assets/scss/home/welcome.scss';

const Solutions = () => {
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
                    <Route path="/solutions" component={Solutions} />
                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
