import React, { Component } from 'react'
import countries from '../countries.json';
import axios from 'axios';


export default class CountryDetails extends Component {


    state = {
        details: {}
    }
    

    getDetails = () => {
    let id = this.props.match.params.cca3

    axios.get(`https://restcountries.eu/rest/v2/name/${id}`)
        .then((response) => {
            let countryDetails ={
            id: id,
            name: response.data.name,
            capital: response.data.capital,
            area: response.data.area,
            broders: response.data.borders
            }
        
            this.setState({
                details: countryDetails
            })
            
            
        })
        .catch(() => {
            console.log('There has been an error')
        })
    }

    componentDidMount() {
        this.getDetails()
    }

    componentDidUpdate() {
        const { details } = this.state;
        let id = this.props.match.params.cca3
        
        details.id.filter((single) => {
            if (single.id !== id) {
              this.getDetails()
          }
        });
        
    }

    render() {
        const { details } = this.state
        console.log(this.props.match.params.cca3);
        return <div>
            <h1>Country</h1>
            {/* {
                details.map((single) => {
                    return (
                        <h1>{single.name}</h1>
                    )
                })
            } */}
        </div>;
    }
}
