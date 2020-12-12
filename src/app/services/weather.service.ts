import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  get(data: any) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.long}&units=metric&lang=es&appid=6d7fbf646a937673991f580974be0660`);
  }
}
