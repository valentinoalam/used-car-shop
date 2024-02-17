import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  x = [1, 2, 3, 4, 5, 6, 7, 8];
}
