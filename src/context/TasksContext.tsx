import React, { createContext, PropsWithChildren, useState, useEffect, useContext } from 'react';
import { Task } from '../model/task';
import { TasksContextModel } from '../model/tasksContextModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

const tasksData = "@MyTasks:Tasks";

export const TasksContext = createContext<TasksContextModel>(
  {
    tasks: [],
    addTask: () => {},
    saveTasks: () => {},
    removeTask: () => {},
  });

export function TasksContextProvider(props: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    LoadTasks();
  }, []);

  async function LoadTasks() {
    const taskList = await AsyncStorage.getItem(tasksData);
    if(taskList) {
      setTasks(JSON.parse(taskList));
    }
  }

  async function saveTasks() {
    if(tasks) {
      await AsyncStorage.setItem(tasksData, JSON.stringify(tasks))
    }
  }

  function addTask(task: Task) {
    setTasks(prev => [...prev, task]);
  }

  async function removeTask(id: string) {
    const newTaskList = tasks.filter(task => task.id != id);
    setTasks(newTaskList);
    await AsyncStorage.setItem(tasksData, JSON.stringify(newTaskList))
  }

  return (
    <TasksContext.Provider
      value={{
          tasks,
          addTask,
          saveTasks,
          removeTask
        }}
      >
      {props.children}
    </TasksContext.Provider>
  )
}

export function useTaskList(): TasksContextModel {
  const context = useContext(TasksContext);

  if(!context) {
    throw new Error("useTaskList deve ser usado em um TasksProvider");
  }

  return context;
}
