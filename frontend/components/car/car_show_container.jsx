import React from 'react';
import { connect } from "react-redux";
import {fetchCar, deleteCar} from '../../actions/car_actions';
import { createRental } from '../../actions/rental_actions';
import CarShow from './car_show';

const mSTP = (state, ownProps)=> ({
  car: state.entities.cars[ownProps.match.params.id],
  currentUserId: state.session.id,
  formFields: {
    carId: 1,
    renterId: state.session.id,
    reserveDate: '',
    returnDate: ''
  }
});

const mDTP = dispatch => ({
  fetchCar: id => dispatch(fetchCar(id)),
  deleteCar: carId => dispatch(deleteCar(carId)),
  createRental: rental => dispatch(createRental(rental))
});

export default connect(mSTP, mDTP)(CarShow);

