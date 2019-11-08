import * as RentalApiUtil from '../util/rental_api_util';

export const RECEIVE_RENTALS = 'RECEIVE_RENTALS';
export const RECEIVE_RENTAL = 'RECEIVE_RENTAL';
export const DELETE_RENTAL = 'DELETE_RENTAL';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveRentals = (rentals) => ({
  type: RECEIVE_RENTALS,
  rentals
});

export const receiveRental = (rental) => ({
  type: RECEIVE_RENTAL,
  rental
});

export const removeRental = (rentalId) => ({
  type: DELETE_RENTAL,
  rentalId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchUserRentals = (id) => dispatch => (
  RentalApiUtil.fetchUserRentals(id)
    .then(rentals => dispatch(receiveRentals(rentals)))
);

export const createRental = (rental) => dispatch => (
  RentalApiUtil.createRental(rental).then(
    rental => dispatch(receiveRental(rental)),
    // errors => dispatch(receiveErrors(errors))
  )
);

export const deleteRental = (id) => dispatch => (
  RentalApiUtil.deleteRental(id).then(
    rental => dispatch(removeRental(rental))
  )
);