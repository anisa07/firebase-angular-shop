  import { Component, OnInit } from '@angular/core';
  import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo = 'Gorgeous Stuff';
  userLoggedIn: boolean;

  constructor(private authService: AuthService) {
    this.userLoggedIn = this.authService.userIsSigned();
  }

  ngOnInit() {}
}
