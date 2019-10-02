/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

import { shallow } from 'enzyme';
import {Text} from 'react-native';

// Check Jest
describe('Jest', () => {
  it('is it working?', () => {
    const a = 1;
    expect(a + 1).toBe(2);
  });
});

// Check Enzyme
describe('Enzyme', () => {
  it('Is it working?', () => {
    const text = 'some text';
    const wrapper = shallow(<Text>{text}</Text>);
    expect(wrapper.text()).toBe(text);
  });
});
