import React from "react";
import {connect} from 'react-redux';
import NavBar from './navbar';
import {logout} from '../../actions/session_actions';

const mSTP = (state) => ({
  currentUser: state.entities.user[state.session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar);