import { Component, inject } from '@angular/core';
import { CardAreaComponent } from "../card-area/card-area.component";
import { AppService } from '@service/app.service';

@Component({
  selector: 'app-hac',
  standalone: true,
  imports: [CardAreaComponent],
  templateUrl: './hac.component.html',
  styleUrl: './hac.component.css'
})
export class HacComponent {
  service= inject(AppService);
  ngOnInit() {
    this.service.setDisableCard(true);
    this.service.setcardDisable(true)
  }
}
