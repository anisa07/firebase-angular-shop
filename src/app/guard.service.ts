import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    try {
      const loggedIn = this.authService.userIsSigned();
      if (!loggedIn) {
        await this.router.navigate(['/login']);
        return false;
      }
      await this.router.navigate(['']);
      return true;
    } catch (e) {
      console.log(e);
    }
  }
}
