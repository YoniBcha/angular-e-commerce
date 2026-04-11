import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet, RouterLink],
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'auth-app';
}
