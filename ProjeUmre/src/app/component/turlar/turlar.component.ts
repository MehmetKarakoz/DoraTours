import { Component, inject } from '@angular/core';
import { AppService } from '@service/app.service';
import { CardAreaComponent } from '../card-area/card-area.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { MiddleNavbarComponent } from '../middle-navbar/middle-navbar.component';
import { TurlaCardsComponent } from "../turla-cards/turla-cards.component";

@Component({
  selector: 'app-turlar',
  standalone: true,
  imports: [NavbarComponent, MiddleNavbarComponent, CardAreaComponent, TurlaCardsComponent],
  templateUrl: './turlar.component.html',
  styleUrl: './turlar.component.css'
})
export class TurlarComponent {
  service= inject(AppService);
  ngOnInit() {
    this.service.setDisableCard(true);
    this.service.setcardDisable(true);
    this.service.cardvisible.set(true)
  }
}
