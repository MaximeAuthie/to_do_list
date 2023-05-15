import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//! Interfaces permettant de définir un typage pour les variable de la classe TasksListComponent
interface Task {
  taskId:number;
  listId:number;
  title:string;
  description:string;
  isCheck: boolean;
}

interface List {
  id:number;
  title:string;
  tasksNumber:number;
  checkedTasksNumber:number;
}

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})

export class TasksListComponent {

  userId:number = 0;

  activeList:List = {
    id: 0,
    title: '',
    tasksNumber: 0,
    checkedTasksNumber: 0
  };

  tasks:Array<Task>=[];

  newTask:Task = {
    taskId: 0,
    listId: 0,
    title: '',
    description: '',
    isCheck: false
  }

  progressRate:string = '';

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    //Récupération de l'ID de la lsite depuis la route
    this.userId = this.route.snapshot.params['id'];

    //Récupération des données
    this.activeList = {
      id: 1,
      title: 'Courses',
      tasksNumber: 4,
      checkedTasksNumber : 2
    }

    this.tasks = [
      {
        taskId: 1,
        listId: 1,
        title: 'Fromage',
        description: 'Rocamadour si possible, sinon un perail',
        isCheck: false
      },
      {
        taskId: 2,
        listId: 1,
        title: 'Pâté',
        description: 'Breton évidemment',
        isCheck: true
      },
      {
        taskId: 3,
        listId: 1,
        title: 'Vin rouge',
        description: 'Sans sulfites!',
        isCheck: false
      },
      {
        taskId: 4,
        listId: 1,
        title: 'Baguette',
        description: 'Tradition x2',
        isCheck: false
      },
    ]

    //Calcul du taux de progression de la liste
    this.progressRate = this.progressRateCalculation() + '%';

  }

  addNewTask(taskData: {taskTitle:string, taskDescription:string}) {
    this.newTask.listId = this.tasks.length + 1;
    this.newTask.taskId = this.activeList.id;
    this.newTask.title = taskData.taskTitle;
    this.newTask.description = taskData.taskDescription;
    this.tasks.push(this.newTask);
  }
  validateTask(taskId:number) {
    this.tasks[taskId].isCheck = !this.tasks[taskId].isCheck;
  }
  removeTask(taskId:number) {
    this.tasks.splice(taskId,1);
  }
  progressRateCalculation() {
    return (this.activeList.checkedTasksNumber / this.activeList.tasksNumber) * 100;
  }

}
