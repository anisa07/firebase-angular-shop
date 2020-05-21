import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {ShopItemComponent} from './shop-item/shop-item.component';
import {ShopListComponent} from './shop-list/shop-list.component';
import {ItemComponent} from './item/item.component';
import {CartComponent} from './cart/cart.component';
import {CustomPipe} from './custom.pipe';
import {CustomDirective} from './custom.directive';
import {ShopItemsService} from './shop-items.service';
import {CartService} from './cart.service';
import {ShopCategoriesListComponent} from './shop-categories-list/shop-categories-list.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import {GuardService} from './guard.service';
import {AntiGuardService} from './anti-guard.service';

const firebaseConfig = {
  apiKey: 'AIzaSyDCYwrF9gPiqM_zL65U2CLKN4yaVrFDn3M',
  authDomain: 'online-shop-angular.firebaseapp.com',
  databaseURL: 'https://online-shop-angular.firebaseio.com',
  projectId: 'online-shop-angular',
  storageBucket: 'online-shop-angular.appspot.com',
  messagingSenderId: '448122546222',
  appId: '1:448122546222:web:33ab2f69a360d5ec2157bf',
  measurementId: 'G-K7GTG6C820'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    ShopItemComponent,
    ShopListComponent,
    ItemComponent,
    CartComponent,
    CustomPipe,
    CustomDirective,
    ShopCategoriesListComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatGridListModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [ShopItemsService, CartService, GuardService, AntiGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
