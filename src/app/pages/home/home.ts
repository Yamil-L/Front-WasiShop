import { Component } from '@angular/core';
import { Header } from '../../components/common/header/header';
import { FeaturedProducts } from '../../components/home/featured-products/featured-products';
import { FeaturedProducers } from '../../components/home/featured-producers/featured-producers';
import { About } from '../../components/home/about/about';
import { NewBundles } from '../../components/home/new-bundles/new-bundles';
import { Footer } from '../../components/common/footer/footer';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    FeaturedProducts,
    FeaturedProducers,
    About,
    NewBundles,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
