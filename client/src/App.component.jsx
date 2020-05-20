import React from 'react';
import './App.styles.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.component';
import Header from './components/header/Header.component';

const App = () => (
  <div className="app">
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </div>
);

export default App;
