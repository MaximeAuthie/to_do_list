import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//! Interfaces permettant de définir un typage pour les variable de la classe TasksListComponent
interface Task {
  taskId:number;
  listId:number;
  title:string;
  description:string;
}

interface List {
  id:number;
  title:string;
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})

export class TasksListComponent {

  userId:number = 0;
  activeList:List = {
    id:0,
    title:''
  };
  tasks:Array<Task>=[];
  newTask:Task = {
    taskId: 0,
    listId: 0,
    title: '',
    description: ''
  }

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];

    this.activeList = {
      id: 1,
      title: 'Courses'
    }

    this.tasks = [
      {
        taskId: 1,
        listId: 1,
        title: 'Fromage',
        description: 'Rocamadour si possible, sinon un perail',
      },
      {
        taskId: 2,
        listId: 1,
        title: 'Pâté',
        description: 'Breton évidemment',
      },
      {
        taskId: 3,
        listId: 1,
        title: 'Vin rouge',
        description: 'Sans sulfites!',
      },
      {
        taskId: 4,
        listId: 1,
        title: 'Baguette',
        description: 'Tradition x2',
      },
    ]

  }

  addNewTask(taskData: {taskTitle:string, taskDescription:string}) {
    this.newTask.listId = this.tasks.length + 1;
    this.newTask.taskId = this.activeList.id;
    this.newTask.title = taskData.taskTitle;
    this.newTask.description = taskData.taskDescription;
    this.tasks.push(this.newTask);
  }
}
