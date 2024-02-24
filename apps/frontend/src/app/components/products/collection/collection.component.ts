import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from '../../card-product/card-product.component';


@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CardProductComponent, CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  products = [1, 2, 3, 4, 5, 6, 7, 8];
}
