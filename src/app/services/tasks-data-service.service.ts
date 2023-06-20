import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Database, ref, set } from "firebase/database";
import { Task } from '../tasks-list/tasks-list.component';

@Injectable({
  providedIn: 'root'
})

export class TasksDataServiceService {

  constructor(private _dataBase: Database) { }

  addTask(task: Task) {
    set(ref(this._dataBase, 'tasks/' + task.taskId), {
      id: task.taskId,
      title: task.title,
      description: task.description,
      listId: task.listId,
      isChecked: task.isCheck
    })
  }

}
