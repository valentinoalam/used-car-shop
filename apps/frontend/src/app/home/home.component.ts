import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { CarouselComponent } from './partials/carousel/carousel.component';
import { CollectionComponent } from '../components/products/collection/collection.component';
import { FilterProductsComponent } from '../partials/filter-products/filter-products.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, FilterProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title= environment.title;

}
