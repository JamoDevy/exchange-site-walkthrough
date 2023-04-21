import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import logo from './logo.svg';
import Layout from './Layout';
import CurrencyConverter from './CurrencyConverter';
import Conversion from './conversion'
import './App.css';

const App = () => {
  return ( 
    <Router basename='/currency_converter'>
      <Layout>
        <Switch>
          <Route path="/" exact component={CurrencyConverter} />
          <Route path="/conversion" component={Conversion} />
          <Route render={() => <h1>404 Not found</h1>} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App;