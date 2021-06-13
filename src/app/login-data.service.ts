import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable,BehaviorSubject } from 'rxjs';
import {ActivatedRoute} from "@angular/router"
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  userData : any;
  token = new BehaviorSubject<any>(null);
  url :string = "";
  constructor(private _HttpClient : HttpClient , private _Router : Router, private _ActivatedRoute : ActivatedRoute) {

    if(localStorage.getItem("userToken") != null)
    {
      this.token.next(localStorage.getItem("userToken"))
      this.url = window.location.pathname;
      if(this.url == "/")
      {
        this._Router.navigate(['/home'])
      }
      else{
      this._Router.navigate([this.url])
      }
      
    }
    else
    {
      this._Router.navigate(['/login'])
    }

   }

   sendLoginData(loginData : object):Observable<any>
   {
     return this._HttpClient.post("https://routeegypt.herokuapp.com/signin",loginData)
   }

  saveUserData(userData : object , token : any)
  {
    this.userData = userData;
    this.token.next(token)
  }
   
}
