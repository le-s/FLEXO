import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const DEMO = 'DEMO';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveDemo = (demoUser) => ({
  type: DEMO,
  demoUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});



export const login = (user) => dispatch => (
  ApiUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveErrors(errors.responseJSON)),
  )
);

export const logout = () => dispatch => (
  ApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
);

export const signup = (user) => dispatch => (
  ApiUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveErrors(errors.responseJSON)),
  )
);

export const demo = () => dispatch => (
  ApiUtil.demo().then(currentUser => dispatch(receiveDemo(currentUser)))
);