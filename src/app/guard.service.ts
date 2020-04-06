import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.userIsSigned()) {
      this.router.navigate(['login']);
      return false;
    }
    this.router.navigate(['']);
    return true;
  }
}
