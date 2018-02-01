import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class NewsService {

  constructor(private http: HttpClient) {
  }

  getHeadlines(country): Observable<Article> {
    var url = 'https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=a5f5253063f74a8f9902e1e9cb8e9e53';
    return this.http
      .get<Article>(url)
  }

}
