import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

interface Card {
  imageSrc: string;
  title: string;
  tourCode: string;
  dates: string;
  flights: string[];
  price: string;
  airline: string;
}
@Component({
  selector: 'app-turla-cards',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './turla-cards.component.html',
  styleUrl: './turla-cards.component.css'
})
export class TurlaCardsComponent {
  cards: Card[] = [
    {
      imageSrc: '/assets/umre2.jpg',
      title: 'TUR BAŞLIĞI YER ALACAK',
      tourCode: 'TUR KODU YER ALACAK',
      dates: 'Tur Hangi tarihler aarası olacağı Belitilecek ',
      flights: [
        'İstanbul (Sabiha Gökçen Havaalanı)',
        'Mekke-i Mükerreme (King Abdulaziz Havaalanı)',
        'Medine-i Münevvere (Prince Mohammed Bin Abdulaziz Havaalanı)',
        'İstanbul (Sabiha Gökçen Havaalanı)'
      ],
      airline: 'Pegasus Airlines',
      price: '$1,625'
    },
    {
      imageSrc: '/assets/umre2.jpg',
       title: 'TUR BAŞLIĞI YER ALACAK',
      tourCode: 'TUR KODU YER ALACAK',
      dates: 'Tur Hangi tarihler aarası olacağı Belitilecek',
      flights: [
        'İstanbul (İstanbul Havaalanı)',
        'Medine-i Münevvere (Prince Mohammed Bin Abdulaziz Havaalanı)',
      ],
      airline: 'Turkish Airlines',
      price: '$2,670'
    },
    
    {
      imageSrc: '/assets/umre2.jpg',
       title: 'TUR BAŞLIĞI YER ALACAK',
      tourCode: 'TUR KODU YER ALACAK',
      dates: 'Tur Hangi tarihler aarası olacağı Belitilecek',
      flights: [
        'İstanbul (İstanbul Havaalanı)',
        'Medine-i Münevvere (Prince Mohammed Bin Abdulaziz Havaalanı)',
      ],
      airline: 'Turkish Airlines',
      price: '$2,670'
    }
    ,
    
    {
      imageSrc: '/assets/umre2.jpg',
       title: 'TUR BAŞLIĞI YER ALACAK',
      tourCode: 'TUR KODU YER ALACAK',
      dates: 'Tur Hangi tarihler aarası olacağı Belitilecek',
      flights: [
        'İstanbul (İstanbul Havaalanı)',
        'Medine-i Münevvere (Prince Mohammed Bin Abdulaziz Havaalanı)',
      ],
      airline: 'Turkish Airlines',
      price: '$2,670'
    }
    ,
    
    {
      imageSrc: '/assets/umre2.jpg',
       title: 'TUR BAŞLIĞI YER ALACAK',
      tourCode: 'TUR KODU YER ALACAK',
      dates: 'Tur Hangi tarihler aarası olacağı Belitilecek',
      flights: [
        'İstanbul (İstanbul Havaalanı)',
        'Medine-i Münevvere (Prince Mohammed Bin Abdulaziz Havaalanı)',
      ],
      airline: 'Turkish Airlines',
      price: '$2,670'
    }
    ,
    
    {
      imageSrc: '/assets/umre2.jpg',
       title: 'TUR BAŞLIĞI YER ALACAK',
      tourCode: 'TUR KODU YER ALACAK',
      dates: 'Tur Hangi tarihler aarası olacağı Belitilecek',
      flights: [
        'İstanbul (İstanbul Havaalanı)',
        'Medine-i Münevvere (Prince Mohammed Bin Abdulaziz Havaalanı)',
      ],
      airline: 'Turkish Airlines',
      price: '$2,670'
    }
   
    
    // Add more cards here
  ];

  selectedCard: Card | null = null;
  displayDialog: boolean = false;

  showDialog(card: Card) {
    this.selectedCard = card;
    this.displayDialog = true;
  }
  onMouseMove(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  }
}

