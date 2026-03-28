import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string) {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('user', 'true');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}
