import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Home Page</h1>
    <a routerLink="/login">Login</a>
    <a routerLink="/profile">Profile</a>
  `,
})
export class HomeComponent {}
