import { Color } from '../models/Color';

const findAll = () => {
  return Color.findAll();
}

const findById = (id: number) => (
  Color.findByPk(id)
);

const create = (options: { name: string }) => {
  return Color.create(options, { returning: true });
}

const bulkCreate = (options: { name: string }[]) => {
  return Color.bulkCreate(options, { returning: true });
}

export const colorService = {
  findAll,
  findById,
  create,
  bulkCreate,
}
