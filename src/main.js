import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history'
import { IntlProvider, addLocaleData } from "react-intl";
import "./styles.scss";
import en from "react-intl/locale-data/en";
import de from "react-intl/locale-data/de";

import localeData from "./i18n/translations.json";

addLocaleData([...en, ...de]);

function getLanguage() {
    const params = new URLSearchParams(window.location.search);
    const selectedLanguage = params.get("lang") || "en";
    return selectedLanguage.toLowerCase().split(/[_-]+/)[0];
}

const language = getLanguage()
const messages =
  localeData[language] ||
  localeData.en;

// Pages
import Airport from "./components/landing/Airport.js";
import City from "./components/landing/City.js";
import NavigationBar from "./components/general/NavigationBar.js";
import Home from "./components/landing/Home.js";

ReactDOM.render(
  <IntlProvider locale={language} messages={messages}>
      <Router history={createBrowserHistory()}>
        <div>
          <NavigationBar/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/airports" component={Airport}/>
              <Route path="/cities" component={City}/>
          </Switch>
        </div>
      </Router>
  </IntlProvider>,
  document.getElementById('root')
);
