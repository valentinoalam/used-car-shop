import { Component } from '@angular/core';
import { ButtonLikeComponent } from '../button-like/button-like.component';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [ButtonLikeComponent],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css'
})
export class CardProductComponent {

}
