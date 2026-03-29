import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../shared/input/input';
import { Button } from '../../../shared/button/button';
import { AuthLayout } from '../../../shared/auth-layout/auth-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, InputComponent, Button, AuthLayout],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupComponent {
  name = '';
  username = '';
  email = '';
  password = '';
  agree = false;

  signup() {
    if (!this.agree) {
      alert('You must agree to the terms');
      return;
    }

    console.log({
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
    });
  }
}
