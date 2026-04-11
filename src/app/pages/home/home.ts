import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageSliderComponent } from '../../shared/image-slider/image-slider';
import { NavBar } from '../nav-bar/nav-bar';
import { TopBar } from '../top-bar/top-bar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImageSliderComponent, NavBar, TopBar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
