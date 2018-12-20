import * as CarApiUtil from '../util/car_api_util';

export const RECEIVE_CARS = 'RECEIVE_CARS';
export const RECEIVE_CAR = 'RECEIVE_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCars = (cars)  => ({
  type: RECEIVE_CARS,
  cars
});

export const receiveCar = (car) => ({
  type: RECEIVE_CAR,
  car
});

export const removeCar = (carId) => ({
  type: DELETE_CAR,
  carId: carId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchCars = () => dispatch => (
  CarApiUtil.fetchCars().then(cars => dispatch(receiveCars(cars)))
);

export const fetchCar = (id) => dispatch => (
  CarApiUtil.fetchCar(id).then(car => dispatch(receiveCar(car)))
);

export const editCar = (car) => dispatch => (
  CarApiUtil.editCar(car).then(car => dispatch(receiveCar(car)))
);

export const deleteCar = (id) => dispatch => (
  CarApiUtil.deleteCar(id).then(car => dispatch(removeCar(car)))
);

export const createCar = (car) => dispatch => (
  CarApiUtil.createCar(car).then(
    car => dispatch(receiveCar(car)),
    errors => dispatch(receiveErrors(errors))
  )
);