import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  constructor(private _apiService:ApiService) {}

  city:string = 'Toulouse';
  apiData:any;

  ngOnInit() {
    this._apiService.getWeather(this.city).subscribe(result => this.apiData = result);
  }

}
