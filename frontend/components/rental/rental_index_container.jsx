import React from 'react';
import { connect } from "react-redux";
import { fetchUserRentals, deleteRental } from '../../actions/rental_actions';
import RentalIndex from './rental_index';

const mSTP = (state) => {
  return ({
    rentals: Object.values(state.entities.rentals),
    currentUserId: state.session.id,
  })
};

const mDTP = dispatch => ({
  fetchUserRentals: userId => dispatch(fetchUserRentals(userId)),
  deleteRental: rentalId => dispatch(deleteRental(rentalId))
});

export default connect(mSTP, mDTP)(RentalIndex);

