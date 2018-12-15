import React from 'react';
import {connect} from 'react-redux';
import {fetchCars, fetchCar} from '../../actions/car_actions';
import CarIndex from './car_index';

const mSTP = (state, ownProps)=> ({
  cars: state.entities.cars[ownProps.match.params.id]
});

const mDTP = dispatch => ({
  fetchCar: id => dispatch(fetchCar(id))
});

export default connect(mSTP, mDTP)(CarIndex);