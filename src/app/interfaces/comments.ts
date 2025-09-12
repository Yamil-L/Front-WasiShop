import { UserMock } from './../constants/mocks/users';
export interface Comment {
  id: string;
  content: string;
  date: Date;
  user: UserMock;
}
