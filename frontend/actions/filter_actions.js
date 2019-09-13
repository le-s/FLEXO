import { fetchCars } from './car_actions';

export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

const changeFilter = (filter, value) => ({
  type: UPDATE_BOUNDS,
  filter,
  value,
});


export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchCars(getState().ui.filter)(dispatch);
};
