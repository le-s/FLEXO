import React from 'react';
import { connect } from 'react-redux';
import { createRental } from '../../actions/rental_actions';
import RentalCreate from './rental_create';

const mSTP = (state, ownProps) => ({
  formFields: {
    carId: state.entities.cars[ownProps.match.params.carId],
    renterId: state.session.id,
    reserveDate: '',
    returnDate: ''
  },
  errors: state.errors.session,
});

const mDTP = dispatch => ({
  createRental: rental => dispatch(createRental(rental))
});

export default connect(mSTP, mDTP)(RentalCreate);