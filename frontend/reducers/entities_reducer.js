import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import carsReducer from './cars_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  cars: carsReducer,
});

export default entitiesReducer;