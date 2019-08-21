import { Component, OnInit } from '@angular/core';
import { PaginationService } from 'src/services/paginationService/pagination.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  allData: any;
  pages = { totalPages: 0, nextPage: 0, previousPage: 0 };

  constructor(private paginationservice: PaginationService, private http: HttpClient) { }

  ngOnInit() {
    this.getPages('1');
  }

  getPages(num?: string){
    let reqHeaders = new HttpHeaders({
      'x-rapidapi-key' : 'bdac755d78msha920a8d278fd596p1adacbjsn1b1b384e667b',
      'x-rapidapi-host' : 'free-nba.p.rapidapi.com'
    })
    this.paginationservice.url = ''
    this.paginationservice.url = `https://free-nba.p.rapidapi.com/games` + `?page=${num}&per_page=8`;
    this.http.get(`${this.paginationservice.url}`, {headers: reqHeaders})
      .subscribe(res => {
        this.allData = res['data'],
        this.pages.totalPages = res['meta'].total_pages;
        this.pages.nextPage = res['meta'].next_page;
      }, (err)=> console.log(err));
  }

  nextPage(){
    this.pages.previousPage++
    this.getPages(this.pages.nextPage.toString());
  }

  prevPage(){
    if(this.pages.previousPage <= 1){
      this.getPages('1');
    }else{
      this.pages.previousPage--
      this.getPages(this.pages.previousPage.toString());
    }
  
  }

}
