import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuActive = false;
  @ViewChild('navbar') navbarElement!: ElementRef;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    if (this.navbarElement) {
      this.navbarElement.nativeElement.classList.toggle('menu-open');
    }
  }
}