import { UserMock } from './users';
import { addresses } from './addresses';

export const myself: UserMock = {
  id: '4',
  name: 'Daniel',
  lastname: 'Diaz',
  profilePicture:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  email: 'myself@gamil.com',
  password: 'HashedPassword',
  gender: 'Male',
  birthdate: new Date(2002, 0, 1),
  phone: 987654321,
  addresses: addresses,
};
