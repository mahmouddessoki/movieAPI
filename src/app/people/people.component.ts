import { Component, OnInit } from '@angular/core';
import {MovieApiService} from "../movie-api-service.service"
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  popular :any;
  imgPath : string = "https://image.tmdb.org/t/p/w500";
  word : string = "";
  constructor(private _MovieApiService :MovieApiService) {
    this._MovieApiService.getPopularPerson().subscribe((data)=>{
      this.popular = data.results;
    })
   }

  ngOnInit(): void {
  }

}
