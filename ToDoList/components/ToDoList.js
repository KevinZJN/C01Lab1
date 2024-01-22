import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialToDos }) => {
  const [toDos, setToDos] = useState(initialToDos.map(title => ({ id: uuidv4(), title })));

  const addToDo = newTitle => {
    setToDos(prevToDos => [...prevToDos, { id: uuidv4(), title: newTitle }]);
  };

  const removeToDo = id => {
    setToDos(prevToDos => prevToDos.filter(toDo => toDo.id !== id));
  };

  return (
    <View style={styles.container}>
      {toDos.map(toDo => (
        <View key={toDo.id} style={styles.toDoItem}>
          <Text>{toDo.title}</Text>
          <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

ToDoList.defaultProps = {
  initialToDos: []
};

const styles = StyleSheet.create({
  container: {
    // Styles go here
  },
  toDoItem: {
    // Styles go here
  }
});

export default ToDoList;
