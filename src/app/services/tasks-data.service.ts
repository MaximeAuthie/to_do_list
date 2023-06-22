import { Injectable } from '@angular/core';
import { Database, getDatabase, ref, set } from "firebase/database";
import { Task } from '../tasks-list/tasks-list.component';

@Injectable({
  providedIn: 'root'
})

export class TasksDataService {

  // constructor(private _dataBase: Database) { }

  addTask(task: Task) {
    const db: Database = getDatabase();

    set(ref(db, 'tasks/' + task.taskId), {
      id: task.taskId,
      title: task.title,
      description: task.description,
      listId: task.listId,
      isChecked: task.isCheck
    })
  }

}
