import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, Button],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  login() {
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/profile']);
    } else {
      alert('Invalid credentials');
    }
  }
}
