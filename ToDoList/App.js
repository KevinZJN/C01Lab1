import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ToDoList from './components/ToDoList'; // Import ToDoList component

export default function App() {
  // Array of initial to-do items
  const initialTasks = ['Task 1', 'Task 2', 'Task 3'];

  return (
    <View style={styles.container}>
      {/* Render ToDoList with initialTasks */}
      <ToDoList initialToDos={initialTasks} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
