import React from 'react';
import {connect} from 'react-redux';
import {fetchCars, fetchCar} from '../../actions/car_actions';
import CarIndex from './car_index';

const mSTP = state => ({
  cars: state.entities.cars
});

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(CarIndex)