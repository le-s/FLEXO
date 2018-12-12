import React from "react";
import {Route} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';

const App = () => (
  <div>
    <h1>FLEXO</h1>
  </div>

  <Route path="/login" component={LoginFormContainer} />
  <Route path="/signup" component={SignupFormContainer} />);

export default App;
