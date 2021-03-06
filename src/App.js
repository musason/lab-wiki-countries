import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import CountriesList from './components/CountriesList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <CountriesList/>
        <Switch>
          <Route
            path="/:cca3"
            render={(props) => {
              return <CountryDetails {...props} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}
