import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ShopComponent} from './components/shop/shop.component';
import {ItemComponent} from './components/item/item.component';
import {SigninComponent} from './components/signIn/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {CartComponent} from './components/cart/cart.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ResetPasswordComponent} from './components/reset-password/reset-password.component';
import {GuardService} from './services/guard.service';
import {AntiGuardService} from './services/anti-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'shop', component: ShopComponent, pathMatch: 'full'},
  {path: 'cart', component: CartComponent, pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, pathMatch: 'full', canActivate: [GuardService]},
  {path: 'shop/:category', component: ShopComponent, pathMatch: 'full'},
  {path: 'item/:id', component: ItemComponent, pathMatch: 'full'},
  {path: 'signin', component: SigninComponent, pathMatch: 'full', canActivate: [AntiGuardService]},
  {path: 'signup', component: SignupComponent, pathMatch: 'full', canActivate: [AntiGuardService]},
  {path: 'reset-password', component: ResetPasswordComponent, pathMatch: 'full', canActivate: [AntiGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
