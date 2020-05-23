import { Component, OnInit } from '@angular/core';
import {checkPasswords} from '../utils/checkPasswords';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  resetPasswordError: string;
  code: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  async onSubmit() {
    if (this.resetPasswordForm.status === 'VALID') {
      try {
        const { password } = this.resetPasswordForm.value;
        await this.authService.resetPassword({code: this.code, password});
        await this.router.navigate(['login']);
      } catch (e) {
        this.resetPasswordError = e.message;
      }
    } else {
      this.resetPasswordError = this.resetPasswordForm.errors ? this.resetPasswordForm.errors.error : 'Form is invalid';
    }
  }

  ngOnInit() {
    this.code = this.route.snapshot.queryParams['oobCode'];
    this.resetPasswordForm = this.fb.group({
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    }, {validators: checkPasswords});
  }

}
