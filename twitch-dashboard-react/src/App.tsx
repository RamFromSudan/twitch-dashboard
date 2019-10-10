import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Games from './components/Games';
import Header from './components/Header';
import GamesStreams from './components/GamesStreams';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Games}/>
      <Route exact path='/top-streams' component={GamesStreams}/>
    </Router>
  );
}

export default App;
