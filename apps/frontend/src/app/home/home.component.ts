import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CarouselHeroComponent } from '../partials/carousel-hero/carousel-hero.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title= environment.title;

}
