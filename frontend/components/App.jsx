import React from "react";
import {Route} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBar from './navbar/navbar_container';
import {AuthRoute} from '../util/route_util'

const App = () => (
  <div>
    <header>
      <h1>FLEXO</h1>
      <NavBar/>
    </header>
    <AuthRoute path='/signup' component={SignupFormContainer}/>
    <AuthRoute path='/login' component={LoginFormContainer}/>
  </div>
);

export default App;
