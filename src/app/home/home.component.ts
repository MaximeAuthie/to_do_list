import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  appUser = {
    id:1,
    firstName: 'Maxime',
    lastName: 'Authié'
  }
}
