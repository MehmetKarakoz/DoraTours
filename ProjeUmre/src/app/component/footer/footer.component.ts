import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder
  )
   {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit() {
    emailjs.init('7LYs0Qnr8NgIrov5X');
  }

  public sendEmail() {
    if (this.contactForm.valid) {
      const { name, email,  message } = this.contactForm.value;

      const emailParams = {
        from_name: name,
        from_email: email,
        message: `Benimle İletişime Geçmenizi Rica Ederim.\nİsim Soyisim: ${name}\nEmail: ${email}\nMesaj: ${message}`,
      };

      emailjs.send('service_1i3itqp', 'template_tz0777w', emailParams)
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          
          // WhatsApp yönlendirmesi
          const whatsappMessage = `Merhaba, web sitenizden ulaşıyorum.\nBen ${name}\n ${message} Bilgi almak istiyorum yardımcı olabilir misiniz? `;
          const encodedMessage = encodeURIComponent(whatsappMessage);
          const whatsappURL = `https://wa.me/TelefonNumarasıGirilecek?text=${encodedMessage}`;
          window.location.href = whatsappURL;
          
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('FAILED...', error);
          alert('E-posta gönderiminde bir hata oluştu.');
        });
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}