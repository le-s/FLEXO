import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => ({
  errors: errors.session,
  formType: 'signup',
  navLink: <Link to='/login'>login</Link>
})

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
})

export default connect(mSTP, mDTP)(SessionForm);