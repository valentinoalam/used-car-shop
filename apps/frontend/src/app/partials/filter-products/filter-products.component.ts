import { Component } from '@angular/core';
import { CollectionComponent } from '../../components/products/collection/collection.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [CollectionComponent, PaginationComponent],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent {

}
