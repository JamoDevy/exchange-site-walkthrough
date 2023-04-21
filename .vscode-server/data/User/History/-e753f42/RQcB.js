import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const App = () => {
  return ( 
    <Router basename=''>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route render={() => <h1>404 Not found</h1>} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App;
