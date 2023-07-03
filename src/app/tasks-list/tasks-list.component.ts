import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from '../lists-list/lists-list.component';
import { getDatabase, ref, onValue, DataSnapshot} from "firebase/database";
import { ListsDataService } from '../services/lists-data.service';
import { TasksDataService } from '../services/tasks-data.service';

//! Interfaces permettant de définir un typage pour les variable de la classe TasksListComponent
export interface Task {
  title: string;
  description: string;
  isCheck: boolean;
}

interface importedTask {
  taskId: string;
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

  tasks: Array<importedTask>=[];

  newTask:Task = {
    title:        '',
    description:  '',
    isCheck:      false
  }

  progressRate: string = '';

  constructor(private route:ActivatedRoute, private _listDataService: ListsDataService, private _taskDataService: TasksDataService ) {}
  getAllTasks(snapshot: DataSnapshot) {

    let _tasksArray: Array<importedTask> = [];

    snapshot.forEach((aTask) => {
      if ( aTask.key != null) {
        _tasksArray.push({
          taskId:        aTask.key,
          title:         aTask.val().title,
          description:   aTask.val().description,
          isCheck:       aTask.val().isCheck
        });
      }
    })

    this.tasks = _tasksArray;
    // console.log(this._listDataService.getList('a1df5f4f4g4ede5de5d4azd89', this.listId));
  }
  getListData():void {
    this._listDataService.getList('a1df5f4f4g4ede5de5d4azd89', this.listId).then((snapshot) => {
      if (snapshot.exists()) {
        this.activList = {
          userId:               snapshot.val().userId,
          title:                snapshot.val().title,
          description:          snapshot.val().description,
          tasksNumber:          snapshot.val().tasksNumber,
          checkedTasksNumber :  snapshot.val().checkedTasksNumber
        }
        console.log(this.activList);
      }
    })
  }
  ngOnInit() {
    //Récupération de l'ID de la liste depuis la route
    this.listId = this.route.snapshot.params['id'];

    //Démarrade la surveillance des modification des tâches de la liste dans la BDD
    const db = getDatabase();
    const directory = ref(db, 'tasksByList/' + this.listId);
    onValue(directory, (snapshot) => this.getAllTasks(snapshot));

    //Récupération des informations de la liste pour les afficher dans le templa
    this.getListData();

    this.progressRate = this.progressRateCalculation() + '%';

  }

  validateTask(taskId: string) {
    let taskToValidate = this.tasks.find((task) => task.taskId === taskId);
    if (taskToValidate != null) {
      taskToValidate.isCheck = !taskToValidate.isCheck;
    }
  }
  removeTask(taskId:string) {
    this._taskDataService.removeTask('a1df5f4f4g4ede5de5d4azd89', this.listId, taskId);
  }
  progressRateCalculation() {
    // return (this.activeList.checkedTasksNumber / this.activeList.tasksNumber) * 100;
  }

}
