import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
      `http://api.weatherapi.com/v1/current.json?key=94d293e56a01480281863536232706&q=` + location + `&aqi=no`
    );
  }
}
