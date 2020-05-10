  import {Component, OnChanges, OnInit} from '@angular/core';
  import {AuthService} from '../auth.service';
  import {Router} from '@angular/router';

  @Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
  logo = 'Gorgeous Stuff';
  userLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  async logout() {
    try {
      await this.authService.logout();
      await this.router.navigate(['']);
    } catch (e) {
      console.log(e);
    }
  }

  async ngOnChanges() {
    const user =  await this.authService.userIsSigned();
    console.log(user);
    this.userLoggedIn = !!user;
  }

  ngOnInit() {}
}
