import { Component } from '@angular/core';
import { FilterProductsComponent } from '../../partials/filter-products/filter-products.component';

@Component({
  selector: 'app-etalase',
  standalone: true,
  imports: [FilterProductsComponent],
  templateUrl: './etalase.component.html',
  styleUrl: './etalase.component.css'
})
export class EtalaseComponent {

}
