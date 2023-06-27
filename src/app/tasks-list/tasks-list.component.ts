import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from '../lists-list/lists-list.component';
import { getDatabase, ref, onValue, DataSnapshot} from "firebase/database";

//! Interfaces permettant de définir un typage pour les variable de la classe TasksListComponent
export interface Task {
  title: string;
  description: string;
  isCheck: boolean;
}


@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})

export class TasksListComponent {

  public listId:string ='';

  activList: List = {
    userId:               '',
    title:                '',
    description:          '',
    tasksNumber:          0,
    checkedTasksNumber :  0
  };

  tasks: Array<Task>=[];

  newTask:Task = {
    title:        '',
    description:  '',
    isCheck:      false
  }

  progressRate: string = '';

  constructor(private route:ActivatedRoute) {}
  getAllTacks(snapshot: DataSnapshot) {
    //! CODER LA FONCTION
  }
  ngOnInit() {
    //Récupération de l'ID de la lsite depuis la route
    this.listId = this.route.snapshot.params['id'];

    const db = getDatabase();
    const directory = ref(db, 'listsByUser/a1df5f4f4g4ede5de5d4azd89');
    onValue(directory, (snapshot) => this.getAllTasks(snapshot));

    this.progressRate = this.progressRateCalculation() + '%';

  }

  addNewTask(taskData: {taskTitle:string, taskDescription:string}) {
    // this.newTask.listId = this.tasks.length + 1;
    // // this.newTask.taskId = this.activList.id;
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
    // return (this.activeList.checkedTasksNumber / this.activeList.tasksNumber) * 100;
  }

}
