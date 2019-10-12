/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddToDo from '../src/components/AddToDo';
import {shallow} from 'enzyme';

// Rendering Test
describe('Rendering test', () => {
  let wrapper;

  beforeEach(() => {
    // init component each test of rendering component
    wrapper = shallow(<AddToDo />);
  });

  // TextInput
  it('is TextInput visable?', () => {
    expect(wrapper.find('TextInput')).toHaveLength(1);
  });

  // Button
  it('is Button visable?', () => {
    expect(wrapper.find('Button')).toHaveLength(1);
  });
});

// Interaction test
describe('Interaction test', () => {
  let wrapper;
  let props;
  const text = "some Todo item";

  beforeEach(() => {
    props = {
      onAdded: jest.fn()
    }

    // init component each test of rendering component
    wrapper = shallow(<AddToDo {...props}></AddToDo>);

    // Fill some text for testing
    wrapper.find('TextInput').simulate("changeText", text);

    // then, press button action
    wrapper.find('Button').prop('onPress')();
  });

  it("should call 'onAdded' callback with input text", () => {
    expect(props.onAdded).toHaveBeenCalledTimes(1); // call only 1 time
    expect(props.onAdded).toHaveBeenCalledWith(text); // call with 'text'
  })
});