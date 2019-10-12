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

  // AddToDo
  it('is AddToDo visable?', () => {
    expect(wrapper.find('AddToDo')).toHaveLength(1);
  });
  
  // ToDoList
  it('is ToDoList visable?', () => {
    expect(wrapper.find('ToDoList')).toHaveLength(1);
  });
});
