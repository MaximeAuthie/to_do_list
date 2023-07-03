import { Injectable } from '@angular/core';
import { Database, getDatabase, ref, set, push, remove } from "firebase/database";
import { Task } from '../tasks-list/tasks-list.component';

@Injectable({
  providedIn: 'root'
})

export class TasksDataService {

  addTask(task: Task, listId:string) {
    console.log(listId);

    //! Définition des variables nécessaire à la fonction set
    const db: Database = getDatabase();
    const postTaskRef = ref(db, 'tasksByList/' + listId);
    const newPostRef = push(postTaskRef);

    //! Appel du web modular API
    const response = set(newPostRef, {
      title: task.title,
      description: task.description,
      isCheck: task.isCheck
   })
  }

  removeTask(userId: string, listId: string, taskId: string) {
    //! Définition des variables nécessaire à la fonction set
    const db: Database = getDatabase();
    const taskToDelete = ref(db, 'tasksByList/' + listId + '/' + taskId);

    //! Appel du web modular API
    remove(taskToDelete);
    console.log('tâche suprrimée');

  }
}
