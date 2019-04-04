import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
      return this.http.get(
          'https://api.apixu.com/v1/current.json?key=bd2d9080553b445ea00173238192403&q=' + location
      );
  }
}
