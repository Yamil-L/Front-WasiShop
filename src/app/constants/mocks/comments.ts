import { users } from './users';
import { Comment } from '../../interfaces/comments';
export const comments: Comment[] = [
  {
    id: '0',
    content:
      'Absolutely delicious and fresh! The flavor was amazing and it exceeded my expectations. Will definitely buy again.',
    date: new Date(),
    user: users[0],
  },
  {
    id: '0',
    content:
      'Good quality product, but the packaging could be improved. The taste was great, and it arrived on time.',
    date: new Date(),
    user: users[1],
  },
  {
    id: '0',
    content:
      'Not what I expected. The texture was a bit off, and it didn’t taste as fresh as I hoped. Probably won’t reorder.',
    date: new Date(),
    user: users[2],
  },
];
