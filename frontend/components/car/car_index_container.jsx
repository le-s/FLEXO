import React from 'react';
import {connect} from 'react-redux';
import {fetchCars} from '../../actions/car_actions';
import {updateFilter} from '../../actions/filter_actions';
import CarIndex from './car_index';

const mSTP = (state) => {
  const sf = Object.values(state.entities.cars).filter(car => car.city === 'San Francisco').slice(0, 5);
  const ny = Object.values(state.entities.cars).filter(car => car.city === 'New York').slice(0, 5);
  const seattle = Object.values(state.entities.cars).filter(car => car.city === 'Seattle').slice(0, 5);
  const la = Object.values(state.entities.cars).filter(car => car.city === 'Los Angeles').slice(0, 5);
  
  return {
    cars: Object.values(state.entities.cars),
    sf,
    ny,
    seattle,
    la,
    filters: state.ui.filter,
  }
};

const mDTP = dispatch => ({
  fetchCars: () => dispatch(fetchCars()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mSTP, mDTP)(CarIndex);