/**
 * @format
 */

import 'react-native';
import React from 'react';
import ToDoList from '../src/components/ToDoList';
import {shallow} from 'enzyme';

// Rendering Test
describe("Rendering", () => {
    const wrapper = shallow(<ToDoList />)
    it("Should render a flat list", () => {
        expect(wrapper.find('FlatList')).toHaveLength(1);
    })
})

// Interaction test
describe("Interaction", () => {
    let wrapper;
    let props;

    beforeEach(() => {
        props = {
            items: [
                {
                    text: "some todo item 1",
                    complete: false
                },
                {
                    text: "some todo item 2",
                    complete: true
                }
            ]
        }
        wrapper = shallow(<ToDoList {...props} />);
    })
    it('should pass props to FlatList', () => {
        expect(wrapper.find('FlatList').prop('data')).toBe(props.items);
    })
})