import { Component, OnInit } from '@angular/core';
import {MovieApiService} from "../movie-api-service.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homeDataMovies : any;
  homeDataTV : any;
  imgPath : string = "https://image.tmdb.org/t/p/w500";
  word : string ="";
  sWord : string = "";

  constructor(public _MovieApiService : MovieApiService) {

    this._MovieApiService.getMovies("movie").subscribe( (data)=>{

         this.homeDataMovies =  data.results.slice(0,11)

    }  )

    this._MovieApiService.getMovies("tv").subscribe( (data)=>{

      this.homeDataTV =  data.results.slice(0,11)

 }  )

   }

  ngOnInit(): void {
  }

}
