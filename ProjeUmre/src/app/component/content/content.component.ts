import { Component, inject } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MiddleNavbarComponent } from "../middle-navbar/middle-navbar.component";
import { CardAreaComponent } from "../card-area/card-area.component";
import { AppService } from '@service/app.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NavbarComponent, MiddleNavbarComponent, CardAreaComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  service= inject(AppService);
  ngOnInit() {
    this.service.setDisableCard(true);
    this.service.setcardDisable(true);
    this.service.cardvisible.set(true)
  }
}
