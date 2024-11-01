import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-middle-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './middle-navbar.component.html',
  styleUrl: './middle-navbar.component.css'
})
export class MiddleNavbarComponent {

}
