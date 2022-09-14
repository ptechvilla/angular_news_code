import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http: HttpClient) { }

  // top headline API URL
  topHeadlinenews = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=9f3828026abf46edab65b6d835e79bf5';
  // tech news API Url
  techNews = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9f3828026abf46edab65b6d835e79bf5';
  // buzz news API uRL
  buzznews = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9f3828026abf46edab65b6d835e79bf5';
  // sports news API URL
  sportsnews = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9f3828026abf46edab65b6d835e79bf5';


  // use sports news 
    tcsportnews():Observable<any>{
      return this._http.get(this.sportsnews);
    }

  //use buzz method
  tcbuzznews(): Observable<any> {
    return this._http.get(this.buzznews)
}

  //use tech method
  tctechnews(): Observable<any> {
    return this._http.get(this.techNews)
  }
  // top head line method
  tcHeadlines(): Observable<any> {
    return this._http.get(this.topHeadlinenews)
  }
}
