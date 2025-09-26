import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/common/header/header';
import { Footer } from '../../components/common/footer/footer';
import { LucideAngularModule, Loader, Phone, Mail, MapPin } from 'lucide-angular';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer,
    LucideAngularModule
  ],
  standalone: true
})
export class Contact {
  contactForm: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;

  async onSubmit() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    try {
      // Aquí iría la lógica para enviar el formulario
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulación de envío
      
      // Resetear formulario
      this.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
      
      alert('Mensaje enviado correctamente');
    } catch (error) {
      alert('Error al enviar el mensaje');
    } finally {
      this.isSubmitting = false;
    }
  }
}