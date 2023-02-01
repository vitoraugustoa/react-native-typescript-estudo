import React from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTaskList } from '../../context/TasksContext';
import { Task } from '../../model/task';

export function TaskList() {
  const tasksContext = useTaskList();

  function handleRemoveTask(id: string) {
    Alert.alert("Tm certeza?", "Deseja realmente excluir a tarefa?", ([
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Excluir',
        onPress: () => tasksContext.removeTask(id)
      }
    ]))
  }

  return (
    <FlatList
      data={tasksContext.tasks}
      keyExtractor={(item: Task) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.buttonTask}
          onPress={() => handleRemoveTask(item.id)}
        >
          <Text style={styles.titleTask}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}


const styles = StyleSheet.create({
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

