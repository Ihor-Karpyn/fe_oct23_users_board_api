import { User } from '../models/User';

type CreateOptions = Pick<User, 'carColorId' | 'name'>

const findAll = async () => {
  return User.findAll();
}

const findById = async (id: number) => {
  return User.findByPk(id);
};

const create = (options: CreateOptions): Promise<User> => {
  return User.create(options, { returning: true });
}

export const userService = {
  findAll,
  findById,
  create,
}
