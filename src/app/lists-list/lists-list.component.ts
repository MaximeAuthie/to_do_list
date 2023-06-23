import { Component } from '@angular/core';

export interface List {
    userId:number;
    title:string;
    description:string;
    tasksNumber:number;
    checkedTasksNumber :number;
}

@Component({
  selector: 'app-lists-list',
  templateUrl: './lists-list.component.html',
  styleUrls: ['./lists-list.component.css']
})

export class ListsListComponent {
 lists:Array<List>=[];

  ngOnInit() {
    this.lists = [
  {
    userId: 1,
    title: 'Courses',
    description: '',
    tasksNumber: 4,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    title: 'Fournitures',
    description: '',
    tasksNumber: 13,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    title: 'Vacances',
    description: '',
    tasksNumber: 28,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    title: 'Projet ToDoList',
    description: '',
    tasksNumber: 7,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    title: 'Projet Brut Messenger',
    description: '',
    tasksNumber: 14,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    title: 'Bricolage',
    description: '',
    tasksNumber: 5,
    checkedTasksNumber : 1
  }
 ]
  }

}
