import { Component, inject } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { ContentComponent } from "../content/content.component";
import { AppService} from '@service/app.service';
import { CardAreaComponent } from '../card-area/card-area.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, ContentComponent, CardAreaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  service= inject(AppService);
  ngOnInit() {
    this.service.setDisableCard(true);
    this.service.setcardDisable(true)
  }
}
