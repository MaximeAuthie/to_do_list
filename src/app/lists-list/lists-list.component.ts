import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-list',
  templateUrl: './lists-list.component.html',
  styleUrls: ['./lists-list.component.css']
})
export class ListsListComponent {
 lists = [
  {
    userId: 1,
    listId: 1,
    title: 'Courses',
    tasksNumber: 37
  },
  {
    userId: 1,
    listId: 2,
    title: 'Fournitures',
    tasksNumber: 13
  },
  {
    userId: 1,
    listId: 3,
    title: 'Vacances',
    tasksNumber: 28
  },
  {
    userId: 1,
    listId: 4,
    title: 'Projet ToDoList',
    tasksNumber: 7
  },
  {
    userId: 1,
    listId: 5,
    title: 'Projet Brut Messenger',
    tasksNumber: 14
  },
  {
    userId: 1,
    listId: 6,
    title: 'Bricolage',
    tasksNumber: 5
  }
 ]
}
