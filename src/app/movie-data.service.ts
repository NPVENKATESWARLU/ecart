import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  constructor(private http:HttpClient) { }
  private url:string="https://trial.mobiscroll.com/content/countries.json";
  getMovieData():Observable<MovieDataService>{
    return this.http.get<MovieDataService>(this.url);
  }
}
