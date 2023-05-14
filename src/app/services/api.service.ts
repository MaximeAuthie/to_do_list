import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { weatherAPIKey } from '../../../api-keys';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getWeather(city:string) {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Toulouse&appid=' + weatherAPIKey + '&units=metric');
  }
}
