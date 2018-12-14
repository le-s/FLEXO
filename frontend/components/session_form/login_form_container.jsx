import React from 'react';
import {connect} from 'react-redux';
import {login, clearErrors} from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from './session_form';

const mSTP = state => ({
  formFields: {
    email: '',
    password: ''
  },
  errors: state.errors.session,
  formType: 'login',
})

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <button className='form-button' 
    onClick={() => {
      dispatch(openModal('signup'));
      dispatch(clearErrors());
    }}>
      Signup
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(SessionForm);