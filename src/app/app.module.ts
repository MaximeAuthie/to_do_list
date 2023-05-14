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
    TaskInputComponent
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
