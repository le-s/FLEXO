import {RECEIVE_CARS, RECEIVE_CAR, DELETE_CAR} from '../actions/car_actions';

const carsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CARS:
      return action.cars;  
    case RECEIVE_CAR:
      return Object.assign({}, state, {[action.car.id]: action.car});  
    case DELETE_CAR:
      newState = Object.assign({}, state)
      delete newState[action.carId];
      return newState; 
    default:
      return state;
  }
};

export default carsReducer;