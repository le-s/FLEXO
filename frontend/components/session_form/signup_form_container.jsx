import React from 'react';
import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from './session_form';

const mSTP = state => ({
  formFields: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  errors: state.errors.session,
  errorsArray: state.errors,
  formType: 'signup',
})

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <button className='form-button' onClick={() => {
      dispatch(openModal('login'));
      dispatch(clearErrors());
    }}>
      Login
    </button>
  ),
  closeModal: () => dispatch(closeModal()),
})

export default connect(mSTP, mDTP)(SessionForm);