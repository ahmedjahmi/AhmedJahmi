import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import ProjectList from "./components/ProjectList";
import Details from "./components/Details";
import Default from "./components/Default";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/ProjectList" component={ProjectList} />
        <Route path="/Details" component={Details} />
        <Route path="/Contact" component={Contact} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
    )
  }
};