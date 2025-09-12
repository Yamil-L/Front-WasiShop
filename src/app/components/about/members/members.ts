import { Component } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-members',
  imports: [],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  members: { name: string; lastname: string; charge: string; image: SafeUrl }[];

  constructor() {
    this.members = [
      {
        name: 'Miguel',
        lastname: 'Mota',
        charge: 'Co-CEO',
        image:
          'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Yamil',
        lastname: 'Gonzales',
        charge: 'Co-CEO',
        image:
          'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Roberto',
        lastname: 'Cayro',
        charge: 'Co-CEO',
        image:
          'https://plus.unsplash.com/premium_photo-1754211765093-55135deabfa0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ];
  }
}
