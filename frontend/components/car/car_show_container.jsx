import React from 'react';
import { connect } from "react-redux";
import {fetchCar} from '../../actions/car_actions';
import CarShow from './car_show';

const mSTP = (state, ownProps)=> ({
  car: state.entities.cars[ownProps.match.params.id],
});

const mDTP = dispatch => ({
  fetchCar: id => dispatch(fetchCar(id))
});

export default connect(mSTP, mDTP)(CarShow);

