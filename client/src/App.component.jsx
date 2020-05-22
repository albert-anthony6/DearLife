import React, { useEffect } from 'react';
import './App.styles.scss';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home.component';
import LogIn from './pages/login/LogIn.component';
import Posts from './pages/posts/Posts.component';
import PostDetails from './pages/post-details/PostDetails.component';

import Header from './components/header/Header.component';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

const App = ({ globalUser, setCurrentUser }) => {
  useEffect(() => {
    if(sessionStorage.user){
      console.log('Getting from session storage...');
      setCurrentUser(JSON.parse(sessionStorage.user));
    }
  }, []);

  return(
    <div className="app">
      <Header user={globalUser}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/:slug" component={PostDetails} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  globalUser: state.user.globalUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);