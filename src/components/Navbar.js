import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <Link to="/">
              <a class="navbar-brand">WikiCountries</a>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
