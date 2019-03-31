import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from "enzyme-adapter-react-16";
import NavBar from './../../components/navbar/navbar_container';

Enzyme.configure({ adapter: new Adapter() });

// const initialState = {};
// const mockStore = configureStore();
// let wrapper;
// let store;

// beforeEach(() => {
//   store = mockStore(initialState);
//   wrapper = shallow(<NavBar store={store}/>);
//  });

describe('NavBar component', () => {
  it('renders without errors', () => {

    // console.log(wrapper);
    // const wrapper = component.find("right-nav");
  });
})