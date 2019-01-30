import React from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../../actions/car_actions';

import SplashCars from './splash_cars';

const mSTP = (state) => ({
  cars: Object.values(state.entities.cars)
});

const mDTP = dispatch => ({
  fetchCars: () => dispatch(fetchCars())
});

export default connect(mSTP, mDTP)(SplashCars);