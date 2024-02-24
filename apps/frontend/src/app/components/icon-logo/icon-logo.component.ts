import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-logo',
  standalone: true,
  imports: [],
  templateUrl: './icon-logo.component.html',
  styleUrl: './icon-logo.component.css'
})
export class IconLogoComponent {
  @Input() title: any;
}
