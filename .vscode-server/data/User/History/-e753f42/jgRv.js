import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const App = () => {
  return ( 
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}
        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
