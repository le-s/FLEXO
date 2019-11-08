import React from "react";
import {Route, Link, Redirect, Switch} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import NavBar from './navbar/navbar_container';
import Landing from './navbar/navbar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Splash from './splash/splash_container';
import CarShow from './car/car_show_container';
import CarIndex from './car/car_index_container';
import CarCreate from './car/car_create_container';
import CarUpdate from './car/car_update_container';
import RentalIndex from './rental/rental_index_container';
import Footer from './footer/footer';

const App = () => (
  <div>
    <Modal />
    <header className="navbar">
      <div className="container">
        <Link to="/">
          <div className="navbar-logo" />
        </Link>
        <NavBar />
      </div>
    </header>
    <Switch>
      <Route exact path="/rentals" component={RentalIndex}/>
      <Route exact path="/cars/create" component={CarCreate} />
      <ProtectedRoute exact path="/cars/:id/edit" component={CarUpdate} />
      <Route path="/cars/:id" component={CarShow} />
      <Route path="/cars" component={CarIndex} />
      <Route exact path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
    <Footer />
  </div>
);

export default App;
