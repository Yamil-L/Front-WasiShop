import { FeaturedProducer } from './../../interfaces/producer';
import { products } from './products';

export const producers: FeaturedProducer[] = [
  {
    id: '0',
    name: 'Naturalist',
    image:
      'https://images.unsplash.com/photo-1629527821795-79d67a6e39bf?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socials: [
      {
        id: '0',
        url: 'https://www.facebook.com/naturalist.peru/?locale=es_LA',
      },
      {
        id: '1',
        url: 'https://x.com/BfNCoalition',
      },
      {
        id: '2',
        url: 'https://www.inaturalist.org/',
      },
    ],

    products: [products[1]],
  },
  {
    id: '1',
    name: 'Jarritos',
    image:
      'https://images.unsplash.com/photo-1579630942078-100a2f8e9052?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socials: [
      {
        id: '0',
        url: 'https://www.facebook.com/Jarritos/?locale=es_LA',
      },
      {
        id: '1',
        url: 'https://www.instagram.com/jarritos/?hl=es',
      },
      {
        id: '2',
        url: 'https://www.jarritosmexico.com/',
      },
    ],

    products: [products[1], products[0]],
  },
  {
    id: '2',
    name: 'Makoyara',
    image:
      'https://images.unsplash.com/photo-1563377225929-7084bcef8e24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fG9yZ2FuaWMlMjBmb29kJTIwYnJhbmR8ZW58MHx8MHx8fDA%3D',
    socials: [
      {
        id: '0',
        url: 'https://www.instagram.com/magniemakoyana/',
      },
      {
        id: '1',
        url: 'https://www.tiktok.com/@makhoyara',
      },
    ],

    products: [products[6], products[5]],
  },

  {
    id: '3',
    name: 'Munro Honey',
    image:
      'https://images.unsplash.com/photo-1668822234480-32ef8a8bb90b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socials: [
      {
        id: '0',
        url: 'https://www.munrohoney.com/',
      },
    ],

    products: [products[2], products[3], products[4]],
  },
];
