import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardAreaComponent } from '../card-area/card-area.component';
import { AppService } from '@service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ButtonModule, CardAreaComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  
  constructor(private router: Router) { }
  service = inject(AppService);
routerLink: any;
  ngOnInit() {
    this.service.setDisableCard(true);
    this.service.setcardDisable(false);
  }


  navigateToContact() {
    this.router.navigate(['/Contact']);
  }
}
