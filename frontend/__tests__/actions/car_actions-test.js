import * as actions from './../../actions/car_actions';

describe("actions", () => {
  it("should create an action to add a create a car", () => {
    const cars = {car: 'car'};
    const expectedAction = {
      type: actions.RECEIVE_CARS,
      cars
    };
    expect(actions.receiveCars(cars)).toEqual(expectedAction);
  });
});