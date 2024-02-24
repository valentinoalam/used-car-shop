import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './more/about/about.component';
import { ContactComponent } from './more/contact/contact.component';
import { EtalaseComponent } from './shop/etalase/etalase.component';
import { JualComponent } from './shop/jual/jual.component';
import { FaqsComponent } from './supports/partials/faqs/faqs.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'etalase',
    component: EtalaseComponent,
  },
  {
    path: 'jual',
    component: JualComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'nah',
    component: ProductDetailComponent,
  }
];
