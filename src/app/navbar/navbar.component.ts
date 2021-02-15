import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {LoginDataService} from "../login-data.service"
import {Router} from '@angular/router'
import * as $ from 'jquery'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginFlag : boolean = false;
  constructor(private _LoginDataService : LoginDataService , private _Router : Router) { 
    this._LoginDataService.token.subscribe((data)=>{
      if(data == null)
      {
        this.loginFlag = false
      }
      else
      {
        this.loginFlag = true;
      }
    })
  }

  logout()
  {
    localStorage.removeItem("userToken");
    this._LoginDataService.token.next(null)
    this._Router.navigate(['/login'])
  }

  ngOnInit(): void {
   

  }

}
