import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  signIn({userEmail, userPassword}) {
    return this.auth.signInWithEmailAndPassword(userEmail, userPassword);
  }

  userIsSigned() {
    return !!this.auth.currentUser;
  }
}
