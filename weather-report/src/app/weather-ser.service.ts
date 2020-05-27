import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherSerService {

  constructor(private http: HttpClient) { }
  getWeatherStatus(cityName : string) {
    const apiKey : string = "f9bdd0ac48377e1349c3cac6b4f1f48a";
    return this.http.get("api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey)
  }
}
