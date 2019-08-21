import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weatherService/weather.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Color Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  }


  constructor( private weatherservice: WeatherService) { }
 weatherData: Array<any> = [];
  individualCity: Array<any> = [];
 searchText: string;
  ngOnInit() {
    this.getWeatherFromApi();
    this.getIndividualCityFromApi();
  }


  getWeatherFromApi(){
    this.weatherservice.getWeather().subscribe((res)=>{
      if(!Array.isArray(res)){
       
        this.weatherData.push.apply(this.weatherData, res.default);
      }else{
        return 
      }
    },(err: HttpErrorResponse) => console.log(err))
  }


  ascendingOrder(array){
   array = array.sort((a: any, b: any)=>{
      return (Number(a.Key) - Number(b.Key))
   })
 
  }

  descendingOrder(array){
    array = array.sort((a: any, b: any)=>{
       return (Number(b.Key) - Number(a.Key))
    })
   }

   getIndividualCityFromApi(){
    this.weatherservice.indivdualCity().subscribe();
   }




}
