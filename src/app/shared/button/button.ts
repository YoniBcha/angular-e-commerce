import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() label: string = 'Click me';
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
}
