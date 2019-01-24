import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Airport from "./Airport.js";
import City from "./City.js";
import NavBar from "../general/NavBar.js";
import Home from "./Home.js";

export const Routes = () => {
    return (
      <div>
          <NavBar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/airports" component={Airport}/>
              <Route path="/cities" component={City}/>
          </Switch>
      </div>
    );
}

export default Routes;
