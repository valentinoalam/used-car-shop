import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, Event, NavigationEnd, RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment.development';
import { IStaticMethods } from 'preline/preline';
import { debounce } from 'perfect-debounce';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

declare global {
  interface HSStaticMethods {
    autoInit: () => void;
}

  interface Window {
      HSStaticMethods: IStaticMethods;
  }
}
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})

export class AppComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  async ngOnInit() {
    const autoInitDebounced = debounce(() => {
      window.HSStaticMethods.autoInit();
    },  100);
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          autoInitDebounced();
        }
      });
    }
  }
  title = environment.title;
}
