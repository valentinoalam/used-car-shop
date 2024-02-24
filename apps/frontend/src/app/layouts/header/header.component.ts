import { DropdownNotificationComponent } from './../../components/dropdown-notification/dropdown-notification.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SigninComponent } from '../../components/auth/signin/signin.component';
import { environment } from '../../../environments/environment.development';
import { SelectLangComponent } from '../../components/select-lang/select-lang.component';
import { DrawerCartComponent } from '../../components/drawer-cart/drawer-cart.component';
import { ButtonLikeComponent } from '../../components/button-like/button-like.component';
import { IconLogoComponent } from '../../components/icon-logo/icon-logo.component';
interface NavItem {
  name: string;
  to?: string;
  child?: NavItem[];
}

type RouteNav = NavItem[];
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IconLogoComponent, SigninComponent, SelectLangComponent, DrawerCartComponent, ButtonLikeComponent, DropdownNotificationComponent],
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
