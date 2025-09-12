import { Component } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { Sell } from '../../components/product/sell/sell';
import { Footer } from '../../components/common/footer/footer';

@Component({
  selector: 'app-product',
  imports: [Header, Sell, Footer],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {}
