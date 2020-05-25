import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string;
  passwordForgotten: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
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
    this.loginForm = this.fb.group({
      userEmail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      userPassword: new FormControl('', Validators.required)
    });
  }

  forgotPassword() {
    this.passwordForgotten = true;
  }

  navigateToSignUp() {
    this.router.navigate(['signup']);
  }
}
