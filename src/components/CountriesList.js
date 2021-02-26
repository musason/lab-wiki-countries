import React, { Component } from 'react'
import countries from '../countries.json'
import { Link } from 'react-router-dom'
import CountryDetails from './CountryDetails';

export default class CountriesList extends Component {
  state = {
      countryList: countries,
  };

  

  render() {
    const { countryList } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="list-group">
              {countryList.map((country) => {
                return (
                  <Link
                    countries={countryList}
                    to={`/${country.cca3}`}
                  >
                    <a
                      key={country.cca3}
                      className="list-group-item list-group-item-action"
                    >
                      <img
                        src={`https://www.countryflags.io/${country.cca2.toLowerCase()}/flat/64.png`}
                      />
                      <h3>{country.name.common}</h3>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <CountryDetails />
        </div>
      </div>
    );
  }
}
