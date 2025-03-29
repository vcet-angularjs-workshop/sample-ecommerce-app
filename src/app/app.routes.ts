import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuardGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    canActivate: [authGuardGuard],
    component: HomePageComponent,
  },
  {
    path: '',
    component: LoginPageComponent,
  },
  {
    path: 'cart',
    canActivate: [authGuardGuard],
    component: CartPageComponent,
  },
];
