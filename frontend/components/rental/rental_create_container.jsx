import React from 'react';
import { connect } from 'react-redux';
import { createRental } from '../../actions/rental_actions';
import RentalCreate from './rental_create';

const mSTP = (state) => ({
  formFields: {
    reserveDate: '',
    returnDate: ''
  },
  errors: state.errors.session,
});

const mDTP = dispatch => ({
  createRental: rental => dispatch(createRental(rental))
});

export default connect(mSTP, mDTP)(RentalCreate);