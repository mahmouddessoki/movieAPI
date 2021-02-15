import { Component, OnInit } from '@angular/core';
import {MovieApiService} from "../movie-api-service.service"
import * as $ from "jquery"
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  allmovies : any;
  imgPath : string = "https://image.tmdb.org/t/p/w500";
  
  word : string = "";

  constructor(private _MovieApiService : MovieApiService) {

    this._MovieApiService.getMovies("movie").subscribe((data)=>{
      this.allmovies = data.results;
    })

   }


  ngOnInit(): void {
    
  }

}
