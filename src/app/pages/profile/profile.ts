import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../components/common/header/header';
import { Menu } from '../../components/profile/menu/menu';
import { Footer } from '../../components/common/footer/footer';

@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, Header, Menu, Footer],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {}
