import { RECEIVE_RENTAL } from '../actions/rental_actions';

const rentalsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RENTAL:
      return Object.assign({}, state, { [action.rental.id]: action.rental });
    default:
      return state;
  }
};

export default rentalsReducer;