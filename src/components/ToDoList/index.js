import React from 'react';
import { FlatList } from 'react-native';

const ToDoList = ({items}) => {
  return <FlatList data={items}></FlatList>;
};

export default ToDoList;
