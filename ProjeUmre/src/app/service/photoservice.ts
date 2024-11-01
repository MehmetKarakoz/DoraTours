import { Injectable } from "@angular/core";

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: 'assets/1792x500_1.webp',
                thumbnailImageSrc: '',
                alt: 'Açıklama 1',
                title: 'Başlık 1'
            },
            {
                itemImageSrc: 'assets/1792x500_2.webp',
                thumbnailImageSrc: '',
                alt: 'Açıklama 1',
                title: 'Başlık 1'
            },
            {
                itemImageSrc: 'assets/1792x500_3.webp',
                thumbnailImageSrc: '',
                alt: 'Açıklama 1',
                title: 'Başlık 1'
            },
            {
                itemImageSrc: 'assets/1792x500_4.webp',
                thumbnailImageSrc: '',
                alt: 'Açıklama 1',
                title: 'Başlık 1'
            },
            // Diğer resimler
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
}
