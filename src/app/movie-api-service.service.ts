import { Injectable } from '@angular/core';

import {Observable} from 'rxjs'

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  constructor(public _HttpClient : HttpClient) { }

  getMovies(mediaType : string):Observable<any>
  {
     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=866cd3a065ef9304a549f1d65e494940`)
  }

  getMovieDetails(movieId : string):Observable<any>
  {
     return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US`)
  }

  getTvDetails(tvId : string):Observable<any>
  {
     return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=866cd3a065ef9304a549f1d65e494940&language=en-US`)
  }

  getPopularPerson():Observable<any>{
     return this._HttpClient.get("https://api.themoviedb.org/3/person/popular?api_key=866cd3a065ef9304a549f1d65e494940&external_source=imdb_id")
  }

  getPopularPersonDetails(personId : string):Observable<any>{
   return this._HttpClient.get(`https://api.themoviedb.org/3/person/${personId}?api_key=866cd3a065ef9304a549f1d65e494940&external_source=imdb_id`)
   }

  

  
}
