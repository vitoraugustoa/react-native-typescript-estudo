import React, { Dispatch, SetStateAction } from "react";
import { Task } from "./task";

export interface TasksContextModel {
  tasks: Task[];
  addTask(task: Task): void;
  saveTasks(): void;
  removeTask(id: string): void;
}
