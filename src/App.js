'use strict';
import React, {Suspense} from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Navbar/Nav';

import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/AppReducer';
import { compose } from 'redux';
import { withRouter } from "react-router";
import Preloader from './components/Preloader/Preloader';
import store from './redux/redux-store';
import {Provider} from "react-redux"; 

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {

    if(!this.props.initialized){
      return <Preloader />
    }

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Route path = "/profile/:userId?" render = { () => { 
            return <Suspense fallback={<div>Загрузка...</div>}> <ProfileContainer /></Suspense>}}  />
          <Route path = "/dialogs" render = { () => {
            return  <Suspense fallback={<div>Загрузка...</div>}><DialogsContainer  /> </Suspense>}} />
          <Route path = "/news" render = { () => <News />} />
          <Route path = "/music" render = { () => <Music />} />
          <Route path = "/settings" render = { () => <Settings />} />
          <Route path = "/users" render = { () => <UsersContainer />} />
          <Route path = "/login" render = { () => <Login />} />      
        </div>
      </div>
    </BrowserRouter>
  );
}
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJsApp = (props) => {
  return <BrowserRouter  Router>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}
export default SamuraiJsApp; 
