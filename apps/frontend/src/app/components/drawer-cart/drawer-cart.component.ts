import { Component } from '@angular/core';
import { ButtonCartComponent } from '../button-cart/button-cart.component';

@Component({
  selector: 'app-drawer-cart',
  standalone: true,
  imports: [ButtonCartComponent],
  templateUrl: './drawer-cart.component.html',
  styleUrl: './drawer-cart.component.css'
})
export class DrawerCartComponent {

}
