import { Routes } from '@angular/router';
import { HomeComponent } from '../app/pages/home/home';
import { LoginComponent } from './pages/auth/login/login';
import { ProfileComponent } from './pages/profile/profile';
import { AuthGuard } from './core/guards/auth-guard';
import { SignupComponent } from './pages/auth/signup/signup';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];
