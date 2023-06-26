import { Injectable } from '@angular/core';
import { Database, getDatabase, ref, set, push, get, child } from "firebase/database";
import { List } from '../lists-list/lists-list.component';

@Injectable({
  providedIn: 'root'
})
export class ListsDataService {

  async addList(list: List) {

    //! Définition des variables nécessaire à la fonction set
    const db: Database = getDatabase();
    const postListRef = ref(db, 'lists/user'+list.userId);
    const newPostRef = push(postListRef);

    //! Appel du web modular API
    const response = await set(newPostRef, {
        title: list.title,
        description: list.description,
        userId: list.userId,
        tasksNumber:list.tasksNumber,
        checkedTasksNumber : list.checkedTasksNumber
    })
  }

  async readLists (userId: number) {
    const dbRef = ref(getDatabase());
    const directory: string = 'lists/user' + userId;
    get(child(dbRef, directory)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  };
}

