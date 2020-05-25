import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  verifyEmailForm: FormGroup;
  verifyEmailError: string;
  verifyMessage: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  async onSubmit() {
    if (this.verifyEmailForm.status === 'VALID') {
      try {
        await this.authService.verifyEmail(this.verifyEmailForm.value.email);
        this.verifyMessage = 'To reset password, please visit your email ' + this.verifyEmailForm.value.email + ', and follow instructions';
      } catch (e) {
        this.verifyEmailError = e.message;
      }
    } else {
      this.verifyEmailError = 'Form is invalid';
    }
  }

  ngOnInit() {
    this.verifyEmailForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

}
