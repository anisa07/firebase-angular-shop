import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      userPassword: new FormControl('', Validators.required)
    });
  }

  async onSubmit() {
    if (this.loginForm.status === 'VALID') {
      try {
        await this.authService.signIn(this.loginForm.value);
        await this.router.navigate(['']);
      } catch (e) {
        this.loginError = e.message;
      }
    }
  }

  ngOnInit() {
  }

}
