import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {

  //!Déclaration de mon Emit : pour remonter un objet vers le composant parent TaskList
  @Output() taskCreated = new EventEmitter<{taskTitle:string, taskDescription:string}>();

  title:string = '';
  description:string = '';

  createNewTask() {
    this.taskCreated.emit({taskTitle : this.title, taskDescription: this.description});
    this.title = '';
    this.description = '';
  }
}
