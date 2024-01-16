import { User } from '../typedefs/user.typedefs';
import { getNewId } from '../helpers/getNewId';

export let users: User[] = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

type CreateOptions = Pick<User, 'carColorId' | 'name'>

const findAll = () => users;

const findById = (id: number) => (
  users.find((user) => user.id === id)
);

const create = (options: CreateOptions) => {
  const newUserId = getNewId(users);
  const newUser = {
    ...options,
    id: newUserId,
  }

  users = [...users, newUser];

  return newUser;
}

export const userService = {
  findAll,
  findById,
  create,
}
