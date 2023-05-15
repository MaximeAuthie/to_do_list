import { Component } from '@angular/core';

interface List {
    userId:number;
    listId:number;
    title:string;
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
    listId: 1,
    title: 'Courses',
    tasksNumber: 4,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    listId: 2,
    title: 'Fournitures',
    tasksNumber: 13,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    listId: 3,
    title: 'Vacances',
    tasksNumber: 28,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    listId: 4,
    title: 'Projet ToDoList',
    tasksNumber: 7,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    listId: 5,
    title: 'Projet Brut Messenger',
    tasksNumber: 14,
    checkedTasksNumber : 1
  },
  {
    userId: 1,
    listId: 6,
    title: 'Bricolage',
    tasksNumber: 5,
    checkedTasksNumber : 1
  }
 ]
  }

}
