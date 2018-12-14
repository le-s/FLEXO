import * as ApiUtil from '../util/car_api_util';

export const RECEIVE_CARS = 'RECEIVE_CARS';
export const RECEIVE_CAR = 'RECEIVE_CAR';
export const DELETE_CAR = 'DELETE_CAR';
export const EDIT_CAR = 'EDIT_CAR';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCars = (cars)  => ({
  type: RECEIVE_CARS,
  cars
});

export const receiveCar = (car) => ({
  type: RECEIVE_CAR,
  car
});

export const removeCar = () => ({
  type: DELETE_CAR
})

export const updateCar = (car) => ({
  type: EDIT_CAR,
  car
})

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchCars = () => (
  ApiUtil.fetchCars().then(cars => dispatch(receiveCars(cars)))
);

export const fetchCar = (id) => (
  ApiUtil.fetchCar(id).then(car => dispatch(receiveCar(car)))
);

// unsure about editing actions
export const editCar = (car) => (
  ApiUtil.editCar(car).then(car => dispatch(updateCar(car)))
);

export const deleteCar = (id) => (
  ApiUtil.deleteCar(id).then(car => dispatch(removeCar(car)))
);

export const createCar = (car) => (
  ApiUtil.createCar(car).then(
    car => dispatch(receiveCar(car)),
    errors => dispatch(receiveErrors(errors))
  )
);