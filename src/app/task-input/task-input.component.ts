import { Component, Output, EventEmitter } from '@angular/core';
import { TasksDataService } from '../services/tasks-data.service';
import { Task } from '../tasks-list/tasks-list.component';

@Component({
  selector:     'app-task-input',
  templateUrl:  './task-input.component.html',
  styleUrls:    ['./task-input.component.css']
})

export class TaskInputComponent {
  constructor(private _tasksDataService: TasksDataService) {}
  //!Déclaration de mon Emit : pour remonter un objet vers le composant parent TaskList
  @Output() taskCreated = new EventEmitter<{taskTitle:string, taskDescription:string}>();

  title: string        = '';
  description: string  = '';

  createNewTask() {
    // this.taskCreated.emit({taskTitle : this.title, taskDescription: this.description});
    const newTask: Task = {
      taskId:       1,
      listId:       1,
      title:        this.title,
      description:  this.description,
      isCheck:      false
    }

    this._tasksDataService.addTask(newTask);
    this.title        = '';
    this.description  = '';
  }
}
