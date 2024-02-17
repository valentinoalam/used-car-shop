import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment.development';
import { SigninComponent } from '../components/auth/signin/signin.component';
interface NavItem {
  name: string;
  to?: string;
  child?: NavItem[];
}

type RouteNav = NavItem[];
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SigninComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router) {}
  title = environment.title;
  routeNav: RouteNav = [
    {name: "Cari Mobil", to: "etalase"},
    {name: "Jual Mobil", to: "jual"},
    {name: "FAQs", to: "faqs"},
    {name: "Blog", to: "blog"},
    {name: "Lainnya", child:  [
      {name: "Tentang kami", to: "about"},
      {name: "Kontak kami", to: "contact"},
      {name: "Sertifikasi produk", to: "sertifikasi"},
      {name: "Temukan kami", to: "lokasi"},
    ]},
  ];
  isCurrent: string = this.router.url;
  isArray(value: any): boolean {
    return Array.isArray(value);
  }

}
