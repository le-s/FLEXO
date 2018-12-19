import React from 'react';
import { connect } from "react-redux";
import {fetchCar, removeCar} from '../../actions/car_actions';
import CarShow from './car_show';

const mSTP = (state, ownProps)=> ({
  car: state.entities.cars[ownProps.match.params.id],
  currentUserId: state.session.id
});

const mDTP = dispatch => ({
  fetchCar: id => dispatch(fetchCar(id)),
  removeCar: carId => dispatch(removeCar(carId))
});

export default connect(mSTP, mDTP)(CarShow);

