import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthSERVICES } from './auth.SERVICES';
import { CanActivate } from '@angular/router';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authSERVICES: AuthSERVICES, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authSERVICES.isAuth) {
      return true;
    } else {
        this.router.navigate(['/auth']);
    }
  }
}
