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
import {AuthService} from './auth.service';
import {ShopCategoriesListComponent} from './shop-categories-list/shop-categories-list.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { firebaseConfig } from '../firebaseConfig';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';

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
    SignupComponent
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
  providers: [ShopItemsService, CartService, AngularFireAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
