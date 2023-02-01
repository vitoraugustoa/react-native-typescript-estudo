import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import { Task } from '../../model/task';
import { TaskList } from '../../components/TaskList';
import { useTaskList } from '../../context/TasksContext';

export const Home = () => {
  const tasksContext = useTaskList();
  const [newTask, setNewTask] = useState<string>("");

  function handleAddNewTask() {
    const task: Task = {
      id: String(new Date().getTime()),
      title: newTask || "TaskEmpty",
    }

    tasksContext.addTask(task);
    setNewTask("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Dev!</Text>
      <TextInput
        onChangeText={setNewTask}
        value={newTask}
        placeholder='Nova Tarefa...'
        placeholderTextColor='#555'
        style={styles.input} />
      <TouchableOpacity onPress={handleAddNewTask} activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      {tasksContext.tasks.length > 0 && (
        <TouchableOpacity onPress={tasksContext.saveTasks} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>Salvar Tarefas</Text>
        </TouchableOpacity>
      )}

      <Text style={[styles.title, styles.titleTasks]}>Minhas Tarefas</Text>

      <TaskList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    paddingHorizontal: 30,
    paddingVertical: 50,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  titleTasks: {
    marginVertical: 50,
  },
  input: {
    backgroundColor: '#29292E',
    color: '#eba417',
    fontWeight: 'bold',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#eba417',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#121214',
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonTask: {
    backgroundColor: '#29292e',
    padding: 10,
    marginTop: 10,
    borderRadius: 50,
    alignItems: 'center'
  },
  titleTask: {
    color: '#F1F1F1',
    fontSize: 20,
    fontWeight: 'bold'
  },
}
);
