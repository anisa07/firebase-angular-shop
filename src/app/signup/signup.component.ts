import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

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
      this.signUpError = this.signUpForm.errors.error;
    }
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', Validators.required),
      passwordRepetition: new FormControl('')
    }, {validators: this.checkPasswords});
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password').value;
    const pass2 = group.get('passwordRepetition').value;

    return pass === pass2 ? null : { error: 'Passwords are not equal' };
  }

}
