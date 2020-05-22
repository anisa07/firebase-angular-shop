import {Injectable, OnDestroy} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private tokenKey = '__angular_shop_token_key';
  // private authUserKey = '__angular_shop_user_email';
  private tokenSubscription: Subscription;

  constructor(private auth: AngularFireAuth) {}

  signIn({userEmail, userPassword}) {
    return this.auth.signInWithEmailAndPassword(userEmail, userPassword).then(() => {
      this.tokenSubscription = this.auth.idToken.subscribe(token => {
        sessionStorage.setItem(this.tokenKey, token);
      });
      // this.auth.user.subscribe(user => {
      //   sessionStorage.setItem(this.authUserKey, user.email);
      // });
    });
  }

  signUp({email, password}) {
    return this.auth.createUserWithEmailAndPassword(email, password).then(() => {
      this.tokenSubscription = this.auth.idToken.subscribe(token => {
        sessionStorage.setItem(this.tokenKey, token);
      });
    });
  }

  checkIfUserAuthorised() {
    return this.auth.authState;
  }

  signOut() {
    this.auth.signOut().then(() => {
      sessionStorage.removeItem(this.tokenKey);
    });
  }

  ngOnDestroy(): void {
    if (this.tokenSubscription) {
      this.tokenSubscription.unsubscribe();
    }
  }
}
