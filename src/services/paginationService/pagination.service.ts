import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
url = 'https://free-nba.p.rapidapi.com/games?page=1&per_page=10'
  constructor(private http: HttpClient) { }

  getPage(): Observable<any>{
    return this.http.get(`${this.url}`)
  }
}
