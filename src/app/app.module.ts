import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//! Import de la librairie router
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router'

//! Import de la librairie pour utiliser des API
import { HttpClientModule } from '@angular/common/http';

//! Import des composants
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsListComponent } from './lists-list/lists-list.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { WeatherComponent } from './weather/weather.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { ListInputComponent } from './list-input/list-input.component';

//! Déclaration de la configuration du projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCnJt6FGjWrZhR1ozZxTCWuFviTWO23mhw",
  authDomain: "to-do-list-angular-f0a59.firebaseapp.com",
  projectId: "to-do-list-angular-f0a59",
  storageBucket: "to-do-list-angular-f0a59.appspot.com",
  messagingSenderId: "581275983118",
  appId: "1:581275983118:web:c7b6b50179ab1c6ad50b5f",
  measurementId: "G-TC6JKXJ0G4",
  databaseURL: "https://to-do-list-angular-f0a59-default-rtdb.europe-west1.firebasedatabase.app/",
};

//! Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const dataBase = getDatabase(app);

//! Déclaration des routes du projet
const appRoutes:Routes = [
  {path:'', component: HomeComponent},
  {path:'account', component: UserAccountComponent},
  {path:'tasks-list/:id', component: TasksListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsListComponent,
    TasksListComponent,
    UserAccountComponent,
    WeatherComponent,
    TaskInputComponent,
    ProgressBarComponent,
    ListInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
