import { Component, OnInit } from '@angular/core';
import {MovieApiService} from "../movie-api-service.service"
import {ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {
  personDetail : any;
  personId :any
  imgPath : string = "https://image.tmdb.org/t/p/w500";

  constructor(private _MovieApiService : MovieApiService , private _ActivatedRoute : ActivatedRoute) {
    this.personId = this._ActivatedRoute.snapshot.paramMap.get("id");
    this._MovieApiService.getPopularPersonDetails(this.personId).subscribe((data)=>{
      this.personDetail = data;
    })
   }

  ngOnInit(): void {
  }

}
