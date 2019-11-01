import React from 'react';
import { connect } from "react-redux";
import { fetchRentals } from '../../actions/rental_actions';

const mSTP = (state, ownProps) => {
  return ({
    car: state.entities.cars[ownProps.match.params.id],
    currentUserId: state.session.id,
    formFields: {
      carId: null,
      renterId: state.session.id,
      reserveDate: '',
      returnDate: ''
    }
  })
};

const mDTP = dispatch => ({
  fetchRentals: () => dispatch(fetchRentals())
});

export default connect(mSTP, mDTP)(CarShow);

