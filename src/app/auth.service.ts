import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth) {}

  signIn({userEmail, userPassword}) {
    return this.auth.signInWithEmailAndPassword(userEmail, userPassword).then(info => {
      sessionStorage.setItem('angular_shop_user', JSON.stringify({uid: info.user.uid, refreshToken: info.user.refreshToken}));
    });
  }

  logout() {
    return this.auth.signOut();
  }

  userIsSigned() {
    return this.auth.currentUser;
  }
}
