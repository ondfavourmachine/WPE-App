import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as weatherJson from '../../app/weather.json'
import * as individualCity from '../../app/individualCity.json'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
   }


  getWeather(): Observable<any>{
    return of(weatherJson);
  }

  indivdualCity(){
    return of(individualCity);
  }
}
