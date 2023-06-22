import { Component } from '@angular/core';
import { ListsDataService } from '../services/lists-data.service';
import { List } from '../lists-list/lists-list.component';

@Component({
  selector:     'app-list-input',
  templateUrl:  './list-input.component.html',
  styleUrls:    ['./list-input.component.css']
})


export class ListInputComponent {

  constructor(private _listDataService: ListsDataService) {}
  title: string       = '';
  description:string  = '';

  createNewList() {
    const newList: List = {
      userId:             1,
      listId:             1,
      title:              this.title,
      tasksNumber:        0,
      checkedTasksNumber: 0
    }

    this._listDataService.addList(newList);
    this.title        = '';
    this.description  = '';
  }
}
