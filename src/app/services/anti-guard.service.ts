import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AntiGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.checkIfUserAuthorised().pipe(
      map(isAuthorised => {
        if (!!isAuthorised) {
          this.router.navigate(['']);
        }
        return !isAuthorised;
      })
    );
  }
}
