import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {checkPasswords} from '../../utils/checkPasswords';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  signUpError: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  async onSubmit() {
    if (this.signUpForm.status === 'VALID') {
      try {
        const { email, password } = this.signUpForm.value;
        await this.authService.signUp({email, password});
        await this.router.navigate(['']);
      } catch (e) {
        this.signUpError = e.message;
      }
    } else {
      this.signUpError = this.signUpForm.errors ? this.signUpForm.errors.error : 'Form is invalid';
    }
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }, {validators: checkPasswords});
  }

  navigateToSignIn() {
    this.router.navigate(['login']);
  }
}
