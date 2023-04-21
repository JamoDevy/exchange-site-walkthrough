import { render } from "@testing-library/react";
import React from "react";

import { checkStatus, json } from './utils/fetch.js';
import currencies from './utils/currencies.js'
import './CurrencyConverter.css'


class CurrencyConverter extends React.Component {
    constructor() {
        super();
        this.state = {
            fromBase: '',
            rates: '',
            amount: '',
        };
    
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFromBase = this.changeFromBase.bind(this);
    
}

componentDidMount() {
    this.getRatesData(this.state.base);
  }

changeFromBase(event) {
    this.setState({fromBase: event.target.value});
    this.getRatesData(event.target.value);
}



handleSubmit(event) {
    event.preventDefault();
    
}


getRatesData = (base) => {
    this.setState({loading: true});
    fetch('http://www.frankfurter.app/latest?')
        .then(checkStatus)
        .then(json)
        .then(data => {
            if(data.error) {
                throw new Error(data.error);
            }
            
            const rates = Object.keys(data.rates)
                .filter(acronym => acronym !== base)
                .map(acronym => ({
                    acronym,
                    rate: data.rates[acronym],
                    name: currencies[acronym].name,
                    symbol: currencies[acronym].symbol,
            }))
  
          this.setState({ rates, loading: false });
        })
        .catch(error => console.error(error.message));
}



render () {

    const {amount , fromBase} = this.state;

    return (
        <React.Fragment>
        <div className="container" id="conversionContainer">
           <div className="container">
                <div className="text-left">
                    <h2 className="mb-2">Currency Converter</h2>
                </div>
            </div>

        <div className="container" id="ratesContainer">
            <div className="row">
                <div className="col-6">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Base Rate:
                            <select className="form-control" value={fromBase} onChange={this.changeFromBase}>
                                {Object.keys(currencies).map(currencyAcronym => <option key={currencyAcronym} value={currencyAcronym}>{currencyAcronym}</option>)}
                                </select>
                        </label>
                    </form>
                </div>
                
            </div>
        </div>
            
        </div>
    </React.Fragment>
    )
  }


}

export default CurrencyConverter;



