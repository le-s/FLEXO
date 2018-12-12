import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = state => ({
  formFields: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  errors: state.errors.session,
  formType: 'signup',
})

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
})

export default connect(mSTP, mDTP)(SessionForm);