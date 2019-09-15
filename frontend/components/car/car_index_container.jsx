import React from 'react';
import {connect} from 'react-redux';
import {fetchCars} from '../../actions/car_actions';
import {updateFilter} from '../../actions/filter_actions';
import CarIndex from './car_index';

const mSTP = (state) => {
  return {
    cars: Object.values(state.entities.cars),
    filters: state.ui.filter,
    bounds: Object.values(state.ui.filter.bounds),
  }
};

const mDTP = dispatch => ({
  fetchCars: () => dispatch(fetchCars()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mSTP, mDTP)(CarIndex);