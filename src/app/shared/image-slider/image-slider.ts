import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.html',
  styleUrls: ['./image-slider.scss'],
  imports: [CommonModule],
})
export class ImageSliderComponent {
  currentIndex = 0;

  images = [
    'Paste_image-removebg-preview.png',
    'Paste_image-removebg-preview.png',
    'Paste_image-removebg-preview.png',
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
