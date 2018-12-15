import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {login, signup, logout} from './actions/session_actions';
import {fetchCars, fetchCar, deleteCar, createCar, editCar} from './actions/car_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // test being
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.fetchCars = fetchCars;  
  window.fetchCar = fetchCar;  
  window.deleteCar = deleteCar;  
  window.createCar = createCar;  
  window.editCar = editCar;  
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // test end

  ReactDOM.render(<Root store={store}/>, root);
})