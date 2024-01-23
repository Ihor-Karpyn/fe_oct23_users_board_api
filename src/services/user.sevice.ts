import { User } from '../models/User';
import { SortOrder } from '../typedefs/typedfs';

type CreateOptions = Pick<User, 'carColorId' | 'name'>

const findAndCountAll = async (options: {
  limit?: number;
  offset?: number;
  sortBy?: string;
  sortOrder?: SortOrder;
} = {}) => {
  const {
    limit,
    offset,
    sortBy = 'id',
    sortOrder = SortOrder.ASC,
  } = options;

  return User.findAndCountAll({
    limit,
    offset,
    order: [[sortBy, sortOrder]],
  });
}

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
  findAndCountAll,
  findAll,
  findById,
  create,
}
