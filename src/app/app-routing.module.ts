import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {ItemComponent} from './item/item.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {CartComponent} from './cart/cart.component';
import {ProfileComponent} from './profile/profile.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {GuardService} from './guard.service';
import {AntiGuardService} from './anti-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'shop', component: ShopComponent, pathMatch: 'full'},
  {path: 'cart', component: CartComponent, pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [GuardService]},
  {path: 'shop/:category', component: ShopComponent, pathMatch: 'full'},
  {path: 'item/:id', component: ItemComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [AntiGuardService]},
  {path: 'signup', component: SignupComponent, pathMatch: 'full', canActivate: [AntiGuardService]},
  {path: 'reset-password', component: ResetPasswordComponent, pathMatch: 'full', canActivate: [AntiGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
