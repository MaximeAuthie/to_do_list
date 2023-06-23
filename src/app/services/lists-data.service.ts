import { Injectable } from '@angular/core';
import { Database, getDatabase, ref, set, update, push } from "firebase/database";
import { List } from '../lists-list/lists-list.component';

@Injectable({
  providedIn: 'root'
})
export class ListsDataService {

  addList(list: List) {
    const db: Database = getDatabase();
    const postListRef = ref(db, 'lists/user:' + list.userId);
    const newPostRef = push(postListRef);
    set(newPostRef, {
        title: list.title,
        description: list.description,
        userId: list.userId,
        tasksNumber:list.tasksNumber,
        checkedTasksNumber : list.checkedTasksNumber
    })
  }
}
