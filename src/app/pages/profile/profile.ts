import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <h1>Profile Page</h1>
    <button (click)="logout()">Logout</button>
  `,
})
export class ProfileComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
