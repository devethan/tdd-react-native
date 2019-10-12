/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

import {shallow} from 'enzyme';
import {Text} from 'react-native';

// test App
describe('App', () => {
  // Header Text
  const wrapper = shallow(<App />);
  it('is Text visable? ', () => {
    expect(wrapper.find('Text').contains('ToDo TDD')).toBe(true);
  });
});
