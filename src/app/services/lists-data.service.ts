import { Injectable } from '@angular/core';
import { Database, getDatabase, ref, set } from "firebase/database";
import { List } from '../lists-list/lists-list.component';

@Injectable({
  providedIn: 'root'
})
export class ListsDataService {

  addList(list: List) {
    const db: Database = getDatabase();
    set(ref(db, 'lists/'), {user: list.userId})
    set(ref(db, 'lists/user:' + list.userId + '/' + list.listId), {
      title: list.title,
      userId: list.userId,
      tasksNumber:list.tasksNumber,
      checkedTasksNumber : list.checkedTasksNumber
    })
  }
}
