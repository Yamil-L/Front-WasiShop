import { SafeUrl } from '@angular/platform-browser';
import { Address } from '../../interfaces/address';
export interface UserMock {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  gender: 'Male' | 'Female' | 'Other';
  birthdate: Date | null; // viene como `null` o string ISO
  phone: number | null; // backend lo devuelve así
  profilePicture?: SafeUrl;
  addresses?: Address[];
}
export const users: UserMock[] = [
  {
    id: '0',
    name: 'Alicia',
    lastname: 'Arenas',
    profilePicture:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email: 'user0@gamil.com',
    password: 'HashedPassword',
    gender: 'Female',
    birthdate: new Date(),
    phone: 123456789,
  },
  {
    id: '1',
    name: 'Beto',
    lastname: 'Bullicio',
    profilePicture:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email: 'user1@gamil.com',
    password: 'HashedPassword',
    gender: 'Male',
    birthdate: new Date(),
    phone: 123456789,
  },
  {
    id: '2',
    name: 'Carlos',
    lastname: 'Cardenas',
    profilePicture:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    email: 'user2@gamil.com',
    password: 'HashedPassword',
    gender: 'Male',
    birthdate: new Date(),
    phone: 123456789,
  },
];
