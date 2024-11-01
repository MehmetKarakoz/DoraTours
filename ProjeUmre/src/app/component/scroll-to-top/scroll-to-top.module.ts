import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopComponent } from './scroll-to-top.component';

@NgModule({
  declarations: [ScrollToTopComponent],
  imports: [CommonModule],
  exports: [ScrollToTopComponent] // Bileşeni dışa aktarıyoruz
})
export class ScrollToTopModule {}
