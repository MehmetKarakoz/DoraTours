import { Component, inject, Inject } from '@angular/core';
import { AppService } from '@service/app.service';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

interface Card {
  detailedContent: any;
  imageSrc: string;
  title: string;
  description: string;
  header: string;
}

@Component({
  selector: 'app-card-area',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './card-area.component.html',
  styleUrl: './card-area.component.css',
})
export class CardAreaComponent {

  service = inject(AppService);
  cards: Card[] = [
    {
      imageSrc: 'umre.jpg',
      title: 'Hac Turu Hakkında Bilgi',
      header: 'Hac Turu Hakkında',

      description: 'Umre ile ilgili detaylı bilgi almak için tıklayın.',
      detailedContent: [
        'Umre, Müslümanların kutsal topraklara yaptığı küçük hac ziyaretidir.',
        "Mekke'ye gidip Kabe'yi tavaf etmek, Safa ve Merve tepeleri arasında say yapmak gibi ibadetleri içerir.",
        'Yıl boyunca herhangi bir zamanda yapılabilir.',
        "Umre, manevi arınma ve Allah'a yakınlaşma fırsatı sunar.",
        'Hazırlık süreci, ihram giyme, niyet etme gibi önemli adımları içerir.',
      ],
    },

    {
      imageSrc: 'umre.jpg',
      title: 'Umre Turları Hakkında Bilgi',
      header: 'Umre Turları Hakkında',

      description: 'Hac hizmetlerimiz hakkında bilgi sahibi olun.',
      detailedContent:
        "Hac, İslam'ın beş şartından biridir ve belirli bir zamanda Mekke'ye yapılan kutsal yolculuktur. Hizmetlerimiz arasında vize işlemleri, ulaşım, konaklama ve rehberlik bulunmaktadır. Deneyimli ekibimizle hacınızı kolaylaştırıyoruz.",
    },
    {
      imageSrc: 'slider1.jpg',
      title: 'Ulaşım Hakında Bilgi',
      header: 'Ulaşım Hakında Bilgi',

      description: 'Kudüs gezilerimiz ile ilgili detaylar.',
      detailedContent:
        'Kudüs, üç semavi din için kutsal kabul edilen tarihi bir şehirdir. Turlarımız Mescid-i Aksa, Kubbetüs Sahra, Ağlama Duvarı ve Kutsal Kabir Kilisesi gibi önemli yerleri kapsar. Tecrübeli rehberlerimiz eşliğinde bu kutsal şehri keşfedin.',
    },
    {
      imageSrc: '/assets/umre2.jpg',
      title: 'Gidiş Şartları Ve Bilgilendirme ',
      header: 'Gidiş Şartları Ve Bilgilendirme',

      description: 'Kudüs gezilerimiz ile ilgili detaylar.',
      detailedContent:
        'Kudüs, üç semavi din için kutsal kabul edilen tarihi bir şehirdir. Turlarımız Mescid-i Aksa, Kubbetüs Sahra, Ağlama Duvarı ve Kutsal Kabir Kilisesi gibi önemli yerleri kapsar. Tecrübeli rehberlerimiz eşliğinde bu kutsal şehri keşfedin.',
    },
    {
      imageSrc: 'slider1.jpg',
      title: 'Anlaşmalı olduğumuz Oteller',
      header: 'Anlaşmalı olduğumuz Oteller',

      description: 'Kudüs gezilerimiz ile ilgili detaylar.',
      detailedContent:
        'Kudüs, üç semavi din için kutsal kabul edilen tarihi bir şehirdir. Turlarımız Mescid-i Aksa, Kubbetüs Sahra, Ağlama Duvarı ve Kutsal Kabir Kilisesi gibi önemli yerleri kapsar. Tecrübeli rehberlerimiz eşliğinde bu kutsal şehri keşfedin.',
    },
    {
      imageSrc: '/assets/umre2.jpg',
      title: 'Konaklama Detayları',
      header: 'Konaklama Detayları',

      description: 'Kudüs gezilerimiz ile ilgili detaylar.',
      detailedContent:
        'Kudüs, üç semavi din için kutsal kabul edilen tarihi bir şehirdir. Turlarımız Mescid-i Aksa, Kubbetüs Sahra, Ağlama Duvarı ve Kutsal Kabir Kilisesi gibi önemli yerleri kapsar. Tecrübeli rehberlerimiz eşliğinde bu kutsal şehri keşfedin.',
    },
    {
      imageSrc: 'umre.jpg',
      title: 'Kadro Bilgileri',
      header: 'Kadro Bilgileri',
      description: 'Kudüs gezilerimiz ile ilgili detaylar.',
      detailedContent:
        'Kudüs, üç semavi din için kutsal kabul edilen tarihi bir şehirdir. Turlarımız Mescid-i Aksa, Kubbetüs Sahra, Ağlama Duvarı ve Kutsal Kabir Kilisesi gibi önemli yerleri kapsar. Tecrübeli rehberlerimiz eşliğinde bu kutsal şehri keşfedin.',
    },
    {
      imageSrc: 'assets/umre3.jpg',
      title: 'Süreç - işleyiş Bilgisi ',
      header: 'Süreç - İşleyişBilgisi',

      description: 'Kudüs gezilerimiz ile ilgili detaylar.',
      detailedContent:
        'Kudüs, üç semavi din için kutsal kabul edilen tarihi bir şehirdir. Turlarımız Mescid-i Aksa, Kubbetüs Sahra, Ağlama Duvarı ve Kutsal Kabir Kilisesi gibi önemli yerleri kapsar. Tecrübeli rehberlerimiz eşliğinde bu kutsal şehri keşfedin.',
    },

    // Daha fazla kart ekleyebilirsiniz...
  ];
  selectedCard: Card | null = null;
  displayDialog: boolean = false;
  visible: any;

  showDialog(card: Card) {
    this.selectedCard = card;
    this.displayDialog = true;
  }

}
