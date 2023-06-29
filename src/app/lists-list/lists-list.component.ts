import { Component } from '@angular/core';
import { ListsDataService } from '../services/lists-data.service';
import { getDatabase, ref, onValue, DataSnapshot} from "firebase/database";

export interface List {
    userId:string;
    title:string;
    description:string;
    tasksNumber:number;
    checkedTasksNumber :number;
}

interface importedList {
  listId:string | null;
  userId:string;
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

  constructor(private _listDataService: ListsDataService) {};
 lists: Array<importedList>=[];

 //! Méthodes
 getAllLists(snapshot: DataSnapshot) {

  let _listArray: Array<importedList> = [];

  snapshot.forEach((aList) => {
    let newList: importedList = aList.val();

    _listArray.push({
      listId: aList.key,
      userId: newList.userId,
      title: newList.title,
      description: newList.description,
      tasksNumber: newList.tasksNumber,
      checkedTasksNumber : newList.checkedTasksNumber
    });
    console.log(aList.key);

  });

  this.lists = _listArray;
  console.log(snapshot);

  console.log(this.lists);

 }

  ngOnInit() {
    const db = getDatabase();
    const directory = ref(db, 'listsByUser/a1df5f4f4g4ede5de5d4azd89');
    onValue(directory, (snapshot) => this.getAllLists(snapshot));
  }
}
