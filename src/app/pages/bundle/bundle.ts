import { Component } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { Sell } from '../../components/bundle/sell/sell';
import { Footer } from '../../components/common/footer/footer';

@Component({
  selector: 'app-bundle',
  imports: [Header, Sell, Footer],
  templateUrl: './bundle.html',
  styleUrl: './bundle.css',
})
export class Bundle {}
