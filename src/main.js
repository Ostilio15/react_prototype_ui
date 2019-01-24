import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import "./styles.scss";

// Pages
import Airport from "./components/landing/Airport.js";
import City from "./components/landing/City.js";
import NavigationBar from "./components/general/NavigationBar.js";
import Home from "./components/landing/Home.js";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <div>
      <NavigationBar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/airports" component={Airport}/>
          <Route path="/cities" component={City}/>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
);
