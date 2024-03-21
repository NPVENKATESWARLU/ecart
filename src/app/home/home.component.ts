import { Component, OnInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies:any;
  showText:boolean=false;
  test1:any;
  movieFinalData:any;
  constructor(private getMovieDataService:MovieDataService) { }

  ngOnInit(): void {
    this.fetchMovieDetails();
    this.getmovie();
  }
  showHideText() {
    this.showText = !this.showText;
  }
  getmovie() {
    this.movies = [
      {
        title: 'Heathers',
        rating: '4.5 stars',
        hasWatched: true
      },
      {
        title: 'Europa Report',
        rating: '2.5 stars',
        hasWatched: false
      },
      {
        title: 'Fellowship of the Ring',
        rating: '5 stars',
        hasWatched: true
      },
      {
        title: 'Silver Linings Playbook',
        rating: '5 stars',
        hasWatched: true
      }
    ]
  };
  fetchMovieDetails(){
    this.getMovieDataService.getMovieData().subscribe(mres=>{
      this.test1=mres;
      this.movieFinalData=this.test1;
      this.movieFinalData.push;
      console.log("this is country data",this.movieFinalData);
    });
  }
}
