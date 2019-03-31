import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import {Provider} from 'react-redux';
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import { SplashCars } from "../../components/splash/splash_cars";
// import SplashCars from "../../components/splash/splash_cars_container";

jest.mock("react-redux");

Enzyme.configure({ adapter: new Adapter() });

// const initialState = {};
// const mockStore = configureStore();
// let store = mockStore(initialState);

const cars = [
  {
    name: "test car 1",
    model: "cool car",
    year: 1999
  },
  {
    name: "test car 2",
    model: "okay car",
    year: 2000
  },
  {
    name: "test car 3",
    model: "cool wagon",
    year: 1960
  }
];

const fetchCars = jest.fn();


describe("Splash page component", () => {
  it("renders without errors", () => {
    let component = shallow(
      // <Provider store={store}>
        <SplashCars cars={cars} fetchCars={fetchCars} />
      // </Provider>
    );
    // console.log('before wrapper')
    // // console.log(SplashCars.reactComponent);
    // console.log(<SplashCars.mockDispatch />);
    // console.log('after wrapper')
    const wrapper = component.find(".splash-index-page-container");
    // // console.log("hello please print");
    expect(wrapper).toHaveLength(1);

  });
});
