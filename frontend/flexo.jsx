import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {createRental, fetchUserRentals, deleteRental} from './actions/rental_actions';

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
  // test begin
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createRental = createRental;
  window.fetchUserRentals = fetchUserRentals;
  window.deleteRental = deleteRental;
  // test end

  ReactDOM.render(<Root store={store}/>, root);
})