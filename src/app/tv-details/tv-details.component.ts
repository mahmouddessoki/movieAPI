import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import {MovieApiService} from "../movie-api-service.service"

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  tvId : any;
  tvDetail : any;
  imgPath : string = "https://image.tmdb.org/t/p/w500";
  constructor(private _ActivatedRoute :ActivatedRoute,private _MovieApiService : MovieApiService) {
    this.tvId = this._ActivatedRoute.snapshot.paramMap.get("id");
    this._MovieApiService.getTvDetails(this.tvId).subscribe((data=>{
        this.tvDetail = data;
    }))


   }

  ngOnInit(): void {
  }

}
