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
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './components/home/home.component';
import {ShopComponent} from './components/shop/shop.component';
import {ShopItemComponent} from './components/shop/shop-list/shop-item/shop-item.component';
import {ShopListComponent} from './components/shop/shop-list/shop-list.component';
import {ItemComponent} from './components/item/item.component';
import {CartComponent} from './components/cart/cart.component';
import {CustomPipe} from './pipes/custom.pipe';
import {CustomDirective} from './directives/custom.directive';
import {ShopItemsService} from './services/shop-items.service';
import {CartService} from './services/cart.service';
import {ShopCategoriesListComponent} from './components/header/shop-categories-list/shop-categories-list.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ProfileComponent} from './components/profile/profile.component';
import {GuardService} from './services/guard.service';
import {AntiGuardService} from './services/anti-guard.service';
import {firebaseConfig} from '../config';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

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
    ProfileComponent,
    ResetPasswordComponent,
    VerifyEmailComponent
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
