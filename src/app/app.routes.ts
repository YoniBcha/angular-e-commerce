import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home';
import { LoginComponent } from './pages/login/login';
import { ProfileComponent } from './pages/profile/profile';
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // public
  { path: 'login', component: LoginComponent }, // public
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] }, // protected
];
