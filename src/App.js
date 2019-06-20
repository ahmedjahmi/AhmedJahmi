import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from "./components/MainNav";
import ProjectList from "./components/ProjectList";
import Details from "./components/Details";
import Default from "./components/Default";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Resume from "./components/Resume";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <MainNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ProjectList" component={ProjectList} />
        <Route path="/Details" component={Details} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Resume" component={Resume} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
    )
  }
};