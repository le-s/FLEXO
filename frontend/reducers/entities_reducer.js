import {combineReducers} from 'redux';
import usersReducer from './users_reducer';
import carsReducer from './cars_reducer'
import rentalsReducer from './rentals_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  cars: carsReducer,
  rentals: rentalsReducer,
});

export default entitiesReducer;