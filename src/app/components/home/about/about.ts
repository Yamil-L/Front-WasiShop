import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  backgroundImage: SafeUrl;

  constructor() {
    this.backgroundImage =
      '/images/fondo.jpg';
  }
}
