import React from "react";
import {Route, Link, Redirect, Switch} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBar from './navbar/navbar_container';
import Landing from './navbar/navbar_container';
import {AuthRoute} from '../util/route_util';
import Modal from './modal/modal';
import Splash from './splash/splash_container';


const App = () => (
  <div>
    <Modal />
    <header className="navbar">
      <div className='container'>
        <Link to="/">
          <div className="navbar-logo"/>
        </Link>
        <NavBar /> 
      </div>
    </header>
    <Switch>
      <Route exact path='/' component={Splash}/>
      <Redirect to='/'/>
    </Switch>
  </div>
);

export default App;
