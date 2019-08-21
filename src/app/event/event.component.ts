import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/services/eventService/events.service';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import moment from "moment"

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
evtData: Array<any> = [];
daysArr: any[];
individualEvent: any = {};
date = moment();
url = 'http://api.eventful.com/rest/events/search?app_key=TpzppG48R9p6W82w&keywords=books&location=San+Diego&date=Future'
  constructor(public eventservice: EventsService, private http: HttpClient) { 
    
  }

  ngOnInit() {
    this.getEvents();
    this.daysArr = this.createCalendar(this.date);
    
  }


  getEvents(){
    let tempArr:any[] = [];
    this.eventservice.getEvents().subscribe(res => {
      tempArr.push.apply(tempArr, res.default["0"]['events'].event);
      this.modifyevtData(tempArr);
    }, (err)=> console.log(err))
  }

  createCalendar(month){
    let firstDay = moment(month).startOf('M');
    let days = Array.apply(null, {length: month.daysInMonth()}).map(Number.call, Number).map((n)=> {return moment(firstDay).add(n, 'd')});

    for(let n = 0; n < firstDay.weekday(); n++){
      days.unshift(null);
    }

    return days;
  }
   

  checkForToday(day){
    if(!day){ return false }
    return moment().format('L') === day.format('L');
  }

 // this function enables scrolling to the next month
  nextMonth(){
    this.date.add(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }
 // this function enables scrolling to the previous month
  previousMonth(){
    this.date.subtract(1, 'M');
    this.daysArr = this.createCalendar(this.date);
  }

  modifyevtData(array){
    let day: number, month: number, tempDay: string, tempMonth: string, secondArr: any[] = []
    for(let evt of array){
      tempDay = evt.start_time.split('-')[2].split(' ')[0];
      tempMonth = evt.start_time.split('-')[1];
      month = Number(tempMonth);
      day = Number(tempDay);
      evt['day'] = day;
      evt['month'] = month;
    }
    secondArr.push.apply(secondArr, array);
    this.evtData.splice(0, this.evtData.length);
    this.evtData.push.apply(this.evtData, secondArr);
 
   

  }

  modifyTime(time: string): string{
    return time.split(' ')[1]
  }

  viewIndividualAddress(evt: any){
    // console.log(evt)
    let modalTrigger;
    modalTrigger = document.getElementById('modalTrigger') as HTMLButtonElement;
    this.individualEvent = { ...evt };
    modalTrigger.click();
  }

}
