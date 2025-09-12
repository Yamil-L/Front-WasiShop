import { Component } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { Content } from '../../components/producer/content/content';
import { Footer } from '../../components/common/footer/footer';

@Component({
  selector: 'app-producer',
  imports: [Header, Content, Footer],
  templateUrl: './producer.html',
  styleUrl: './producer.css',
})
export class Producer {}
