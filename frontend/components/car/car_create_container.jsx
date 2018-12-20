import React from 'react';
import {connect} from 'react-redux';
import {createCar} from '../../actions/car_actions';
import CarCreate from './car_create';

const mSTP = (state) => ({
  formFields: {
    ownerId: state.session.id,
    make: '',
    model: '',
    year: '',
    price: '',
    description: '',
    mpg: '',
    fuelType: '',
    numDoors: '',
    numSeats: '',
    bluetooth: false,
    auxiliaryInput: false,
    heatedSeats: false,
    gps: false,
    automaticTrans: false,
    usbPorts: false,
    backupCamera: false,
    mods: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    longitude: '',
    latitude: ''
  },
  errors: state.errors.session,
  formType: 'create'
});

const mDTP = dispatch => ({
  createCar: car => dispatch(createCar(car))
});

export default connect(mSTP, mDTP)(CarCreate);