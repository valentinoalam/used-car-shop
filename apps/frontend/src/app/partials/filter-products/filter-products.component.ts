import { Component } from '@angular/core';
import { CollectionComponent } from '../../components/products/collection/collection.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { SearchProductComponent } from '../../components/search-product/search-product.component';

@Component({
  selector: 'app-filter-products',
  standalone: true,
  imports: [CollectionComponent, PaginationComponent, SearchProductComponent],
  templateUrl: './filter-products.component.html',
  styleUrl: './filter-products.component.css'
})
export class FilterProductsComponent {

}
