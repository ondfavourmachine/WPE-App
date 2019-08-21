import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as eventsJson from '../../app/event.json'

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) {
  }

 getEvents(): Observable<any>{
  return of(eventsJson)
 }

 trimAString(str: string, num: number){
  let tempStr = [], trimmedStr = [], count = 0;
    if(str.split(' ').length < num ) {
      return str
    }else{
      tempStr = str.split(' ');
      // console.log(tempStr);
      for(let i of tempStr){
        if(count < num){
          // console.log(true, count, i);
          trimmedStr.push(i);
          count++
        }else{
          break;
        }
      }
      return trimmedStr.join(' ').concat(' ...')
    }
}
}
