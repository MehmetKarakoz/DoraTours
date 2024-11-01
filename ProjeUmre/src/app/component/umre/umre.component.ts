import { Component, inject } from '@angular/core';
import { CardAreaComponent } from "../card-area/card-area.component";
import { AppService} from '@service/app.service';

@Component({
  selector: 'app-umre',
  standalone: true,
  imports: [CardAreaComponent],
  templateUrl: './umre.component.html',
  styleUrl: './umre.component.css'
})
export class UmreComponent {
  service= inject(AppService);
  ngOnInit() {
    this.service.setDisableCard(true);
    this.service.setcardDisable(true);
    this.service.cardvisible.set(false)
  }
}
