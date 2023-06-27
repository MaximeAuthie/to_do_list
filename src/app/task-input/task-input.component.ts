import { Component, Output, EventEmitter, Input } from '@angular/core';
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
  @Input('listId') public listId:any ;

  title: string        = '';
  description: string  = '';

  createNewTask() {
    // this.taskCreated.emit({taskTitle : this.title, taskDescription: this.description});
    const newTask: Task = {
      title:        this.title,
      description:  this.description,
      isCheck:      false
    }

    this._tasksDataService.addTask(newTask, this.listId);
    this.title        = '';
    this.description  = '';
  }
}
