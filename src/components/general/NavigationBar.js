import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airports">Airports</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationBar;
