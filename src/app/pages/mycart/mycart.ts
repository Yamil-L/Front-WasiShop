import { Component } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { Footer } from '../../components/common/footer/footer';

@Component({
  selector: 'app-mycart',
  imports: [Header, Footer],
  templateUrl: './mycart.html',
  styleUrl: './mycart.css',
})
export class Mycart {}
