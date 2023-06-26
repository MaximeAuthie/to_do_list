import { Component } from '@angular/core';
import { ListsDataService } from '../services/lists-data.service';
import { List } from '../lists-list/lists-list.component';
import { __values } from 'tslib';

@Component({
  selector:     'app-list-input',
  templateUrl:  './list-input.component.html',
  styleUrls:    ['./list-input.component.css']
})


export class ListInputComponent {

  //! Générer une instance de ListsDataService
  constructor(private _listDataService: ListsDataService) {}

  //! Définir les variables nécessaires
  title: string       = '';
  description:string  = '';

  //! Méthode pour créer une nouvelle liste
  createNewList() {
    //! Créer un objet de type List
    const newList: List = {
      userId:             1,
      title:              this.title,
      description:        this.description,
      tasksNumber:        0,
      checkedTasksNumber: 0
    }

    //! Appeller la méthode addList du service listDataService
    this._listDataService.addList(newList)
    .then(() => {
      console.log('List added successfully');
    })
    .catch((error) => {
      console.log('Unsuccessfull operation : ' + error);
    })

    //! Remettre les champs du formulaire de création de liste à 0
    this.title        = '';
    this.description  = '';
  }
}
