import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//! Import de la librairie router
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router'

//! Import des composants
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListsListComponent } from './lists-list/lists-list.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';

//! Déclaration des routes du projet
const appRoutes:Routes = [
  {path:'', component: HomeComponent},
  {path:'account', component: UserAccountComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsListComponent,
    TasksListComponent,
    UserAccountComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
