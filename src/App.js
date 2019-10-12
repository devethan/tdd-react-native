import React from 'react';
import {View, Text} from 'react-native';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <View>
      <Text>ToDo TDD</Text>
      <AddToDo />
      <ToDoList />
    </View>
  );
};

export default App;
