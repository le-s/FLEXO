import * as RentalApiUtil from '../util/rental_api_util';

// export const RECEIVE_CARS = 'RECEIVE_CARS';
export const RECEIVE_RENTAL = 'RECEIVE_RENTAL';
// export const DELETE_CAR = 'DELETE_CAR';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// export const receiveCars = (cars) => ({
//   type: RECEIVE_CARS,
//   cars
// });

export const receiveRental = (rental) => ({
  type: RECEIVE_RENTAL,
  rental
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// export const removeCar = (carId) => ({
//   type: DELETE_CAR,
//   carId: carId
// });

// export const receiveErrors = errors => ({
//   type: RECEIVE_ERRORS,
//   errors
// });

// export const fetchCars = (filters) => dispatch => (
//   CarApiUtil.fetchCars(filters)
//     .then(cars => dispatch(receiveCars(cars)))
// );

// export const fetchCar = (id) => dispatch => (
//   CarApiUtil.fetchCar(id).then(car => dispatch(receiveCar(car)))
// );

// export const editCar = (car) => dispatch => (
//   CarApiUtil.editCar(car).then(car => dispatch(receiveCar(car)))
// );

// export const deleteCar = (id) => dispatch => (
//   CarApiUtil.deleteCar(id).then(car => dispatch(removeCar(car)))
// );

export const createRental = (rental) => dispatch => (
  RentalApiUtil.createRental(rental).then(
    rental => dispatch(receiveRental(rental)),
    // errors => dispatch(receiveErrors(errors))
  )
);