import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  constructor(private  _HttpClient : HttpClient) { }

  sendRegisterData(registerData : object) : Observable<any>
  {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signup",registerData)
  }

}
