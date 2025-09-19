// src/app/interfaces/dynamic-bundle.ts
export interface DynamicBundle {
  id: string;
  name: string;
  description: string;
  discount_percent: number;
  created_date: string;
  imageUrl: string; // exclusivo para los dinámicos
}
