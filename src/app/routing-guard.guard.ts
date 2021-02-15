import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginDataService} from './login-data.service'
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class RoutingGuardGuard implements CanActivate {
  constructor(private _LoginDataService : LoginDataService, private _Router : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this._LoginDataService.token.getValue() != null)
      {
        return true;
      }
      else{
        this._Router.navigate(['/login'])
        return false;
      }


  }
  
}
