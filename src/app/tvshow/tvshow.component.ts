import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {MovieApiService} from "../movie-api-service.service"

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {

  allTvShows : any;
  imgPath : string = "https://image.tmdb.org/t/p/w500";
  word : string = "";
  constructor(private _MovieApiService : MovieApiService) {

    this._MovieApiService.getMovies("tv").subscribe((data)=>{
      this.allTvShows = data.results;
    })

   }

  ngOnInit(): void {
  }

  
}
