import React from "react";
import {Route, Link} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBar from './navbar/navbar_container';
import {AuthRoute} from '../util/route_util';
import Modal from './modal/modal';


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
  </div>
);

export default App;
