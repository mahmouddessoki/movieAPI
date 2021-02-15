import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {MovieApiService} from '../movie-api-service.service'
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movieID : any;
  allMovieData : any;
  imgPath : string = "https://image.tmdb.org/t/p/w500"
  constructor(private _ActivatedRoute : ActivatedRoute , private _MovieApiService : MovieApiService) {
    this.movieID = this._ActivatedRoute.snapshot.paramMap.get("id")
    this._MovieApiService.getMovieDetails(this.movieID).subscribe((data)=>{
      this.allMovieData = data;
    })
   }

  ngOnInit(): void {
  }

}
