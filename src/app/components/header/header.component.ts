import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy, OnInit {
  logo = 'Gorgeous Stuff';
  isAuthorised = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {
  }

  logout() {
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.checkIfUserAuthorised()
      .subscribe(isAuthorised => this.isAuthorised = !!isAuthorised);
  }
}
