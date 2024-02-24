import { Component } from '@angular/core';
import { Slide1Component } from './slides/slide-1.component';
import { Slide2Component } from './slides/slide-2.component';
import { Slide3Component } from './slides/slide-3.component';
import { CommonModule, NgComponentOutlet } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgComponentOutlet, CommonModule, Slide1Component, Slide2Component, Slide3Component],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  components: any[] = [Slide1Component, Slide2Component, Slide3Component];

}
