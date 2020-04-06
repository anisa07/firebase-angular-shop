import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GuardService } from './guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:  'full' },
  { path: 'shop', component: ShopComponent, pathMatch:  'full' },
  { path: 'shop/:category', component: ShopComponent, pathMatch:  'full' },
  { path: 'item/:id', component: ItemComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [!GuardService] },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
