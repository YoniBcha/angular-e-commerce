import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
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
