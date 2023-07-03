import { Injectable } from '@angular/core';
import { Database, getDatabase, ref, set, push, get, child } from "firebase/database";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { List } from '../lists-list/lists-list.component';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ListsDataService {

  async addList(list: List) {

    //! Définition des variables nécessaire à la fonction set
    const db: Database = getDatabase();
    const postListRef = ref(db, 'listsByUser/' + list.userId);
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

  getList (userId: string, listId: string) {
    const dbRef = ref(getDatabase());
    let returnedList:List;

    return get(child(dbRef, 'listsByUser/' + userId + '/' + listId ));
  }

  async readLists (userId: string) {
    const dbRef = ref(getDatabase());
    const directory: string = 'usersLists/' + userId + '/lists';
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

