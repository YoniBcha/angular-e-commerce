import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.html',
  styleUrls: ['./image-slider.scss'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  currentIndex = 1;

  intervalId: any;
  noTransition = false;
  isAnimating = false;

  images = [
    'Paste_image-removebg-preview.png',
    'Paste_image-1.png',
    'Paste_image-removebg-preview.png',
    'Paste_image-2.png',
    'Paste_image-1.png',
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  // 🔥 Infinite loop trick (clone first & last)
  get extendedImages() {
    return [this.images[this.images.length - 1], ...this.images, this.images[0]];
  }

  get realIndex() {
    if (this.currentIndex === 0) return this.images.length - 1;
    if (this.currentIndex === this.images.length + 1) return 0;
    return this.currentIndex - 1;
  }

  // =====================
  // AUTO SLIDE (3 sec)
  // =====================
  startAutoSlide() {
    this.intervalId = setInterval(() => {
      if (!this.isAnimating) {
        this.next();
      }
    }, 1000);
  }

  pause() {
    clearInterval(this.intervalId);
  }

  // =====================
  // NAVIGATION
  // =====================
  next() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex++;
  }

  prev() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex--;
  }

  goTo(index: number) {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex = index + 1;
  }

  // =====================
  // LOOP FIX (NO JUMP)
  // =====================
  onTransitionEnd() {
    this.isAnimating = false;

    if (this.currentIndex === 0) {
      this.noTransition = true;
      this.currentIndex = this.images.length;

      requestAnimationFrame(() => {
        this.noTransition = false;
      });
    }

    if (this.currentIndex === this.images.length + 1) {
      this.noTransition = true;
      this.currentIndex = 1;

      requestAnimationFrame(() => {
        this.noTransition = false;
      });
    }
  }
}
