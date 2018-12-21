import React from 'react';
import {connect} from 'react-redux';
import {editCar, fetchCar} from '../../actions/car_actions';
import CarUpdate from './car_update';
import {withRouter} from 'react-router-dom';

const mSTP = (state, ownProps) => {
  return ({
  car: state.entities.cars[ownProps.match.params.id],
  errors: state.errors.session,
  formType: 'update'
  })
};

const mDTP = dispatch => ({
  fetchCar: id => dispatch(fetchCar(id)),
  editCar: car => dispatch(editCar(car)),
})

export default withRouter(connect(mSTP, mDTP)(CarUpdate));