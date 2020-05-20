import React from 'react';
import './App.styles.scss';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home.component';
import LogIn from './pages/login/LogIn.component';
import Header from './components/header/Header.component';

const App = () => (
  <div className="app">
    <Header/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
      {/* <Route path="*" component={NotFound} /> */}
    </Switch>
  </div>
);

export default App;
