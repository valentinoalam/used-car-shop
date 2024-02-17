import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EtalaseComponent } from './etalase/etalase.component';
import { JualComponent } from './jual/jual.component';
import { FaqsComponent } from './faqs/faqs.component';

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
  }
];
