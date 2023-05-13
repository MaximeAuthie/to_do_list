import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  getWeather(city:string, key:string) {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Toulouse&appid=&units=metric');
  }
}
