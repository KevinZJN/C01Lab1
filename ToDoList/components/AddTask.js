import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim() !== '') {
      onAddTask(title.trim());
      setTitle('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="New task..."
        style={styles.input}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
  }
});

export default AddTask;
