import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageSliderComponent } from '../../shared/image-slider/image-slider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
