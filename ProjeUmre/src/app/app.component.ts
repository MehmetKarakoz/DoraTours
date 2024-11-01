import { Component, Inject, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { SliderComponent } from './component/slider/slider.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardAreaComponent } from './component/card-area/card-area.component';
import { AboutComponent } from './component/about/about.component';
import { AppService} from '@service/app.service';
import { TurlarComponent } from './component/turlar/turlar.component';
import { ScrollToTopComponent } from './component/scroll-to-top/scroll-to-top.component';
import { ScrollToTopModule } from './component/scroll-to-top/scroll-to-top.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FooterComponent,
    ContentComponent,
    SliderComponent,
    NavbarComponent,
    CardAreaComponent,
    AboutComponent,
    TurlarComponent,
    ScrollToTopModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // "styleUrl" yerine "styleUrls" olmalı
})
export class AppComponent {
  title = 'ProjeUmre';
  cardDisable: any;
  service = inject(AppService);
  
  }
