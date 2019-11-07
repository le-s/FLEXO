import React from 'react';
import { connect } from "react-redux";
import { fetchUserRentals } from '../../actions/rental_actions';

const mSTP = (state) => {
  return ({
    rentals: Object.values(state.entities.rentals)
  })
};

const mDTP = dispatch => ({
  fetchUserRentals: () => dispatch(fetchUserRentals())
});

export default connect(mSTP, mDTP)(CarShow);

