import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesGuard implements CanActivate {
  constructor(){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    return LoginComponent.getAccount.pipe(map(user => !!user)) ;
  }
  
}
