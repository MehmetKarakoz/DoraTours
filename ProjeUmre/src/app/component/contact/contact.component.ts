import { Component, Inject, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';
import { AppService } from '@service/app.service';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputMaskModule],
})

export class ContactComponent implements OnInit {
  
  checkFormValidity() {
    if (this.contactForm.invalid) {
      // Show the error message if form is invalid
      this.isFormInvalid = true;
  
      // Hide the message after 3 seconds
      setTimeout(() => {
        this.isFormInvalid = false;
      }, 3000);
    }
  }
  
  fb = inject(FormBuilder);
  service = inject(AppService);
  isFormInvalid: boolean = false;

  contactForm = this.fb.group<any>({
    name: this.fb.control(null, Validators.required),
    email: this.fb.control(null, [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    number: this.fb.control(null, [
      Validators.required,
      Validators.maxLength(18)
    ]),
    
        message: this.fb.control(null, Validators.required),
  });
  constructor() {}

  ngOnInit() {
    emailjs.init('7LYs0Qnr8NgIrov5X');
    this.service.setDisableCard(false);
    this.service.setcardDisable(false);
  }
  onFocusNumber(event:Event){
    console.log(event)
  }
  sendEmail() {
    if (this.contactForm.valid) {
      const { name, email, number, message } = this.contactForm.value;
  
      const emailParams = {
        from_name: name,
        from_email: email,
        message: `Benimle İletişime Geçmenizi Rica Ederim.\nİsim Soyisim: ${name}\nEmail: ${email}\nNumara: ${'+90' + number}\nMesaj: ${message}`,
        number: '+90' + number,
      };
      
      emailjs
        .send('service_1i3itqp', 'template_tz0777w', emailParams)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
  
          // WhatsApp yönlendirmesi yeni pencerede
          const whatsappMessage = `Merhaba, web sitenizden ulaşıyorum.\nBen ${name}\n${message} Bilgi almak istiyorum yardımcı olabilir misiniz? `;
          const encodedMessage = encodeURIComponent(whatsappMessage);
          const whatsappURL = `https://wa.me/TelefonNumarasıGirilecek?text=${encodedMessage}`;
          window.open(whatsappURL, '_blank'); // Yeni pencerede açılması için
  
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('E-posta gönderiminde bir hata oluştu.');
        });
    } else {
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
