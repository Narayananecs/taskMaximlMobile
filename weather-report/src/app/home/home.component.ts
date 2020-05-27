import { Component, OnInit } from "@angular/core";
import { WeatherSerService } from "../weather-ser.service";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private weatherService : WeatherSerService) {
        // Use the component constructor to inject providers.
    }
    panel1ImgSrc ="~/assets/weather.png";
    panelTextField : string="";
    panel1Label;
    ngOnInit(): void {
        // Init your component properties here.
    }
    getWeatherReport(id:number) {
        console.log(this.panelTextField);

        this.weatherService.getWeatherStatus(this.panelTextField).subscribe(
            (data) => {
                console.log(data);
                this.panel1Label = data
            }
        )
    }
}
