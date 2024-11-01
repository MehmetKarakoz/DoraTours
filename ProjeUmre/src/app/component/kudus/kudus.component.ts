import { Component, inject } from '@angular/core';
import { CardAreaComponent } from "../card-area/card-area.component";
import { NavbarComponent } from '../navbar/navbar.component';
import { MiddleNavbarComponent } from '../middle-navbar/middle-navbar.component';
import { AppService } from '@service/app.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kudus',
  standalone: true,
  imports: [NavbarComponent, MiddleNavbarComponent, CardAreaComponent],
  templateUrl: './kudus.component.html',
  styleUrl: './kudus.component.css'
})
export class KudusComponent {
  service= inject(AppService);
  ngOnInit() {
    this.service.setDisableCard(true);
    this.service.setcardDisable(true);
    this.service.cardvisible.set(false)
  }
}
