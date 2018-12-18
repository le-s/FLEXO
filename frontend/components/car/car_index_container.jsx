import React from 'react';
import {connect} from 'react-redux';
import {fetchCars} from '../../actions/car_actions';
import CarIndex from './car_index';

const mSTP = (state) => ({
  cars: Object.values(state.entities.cars)
});

const mDTP = dispatch => ({
  fetchCars: () => dispatch(fetchCars())
});

export default connect(mSTP, mDTP)(CarIndex);