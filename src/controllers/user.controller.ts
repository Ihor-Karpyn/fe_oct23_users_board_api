import { Controller } from '../typedefs/typedfs';
import { userService } from '../services/user.sevice';
import { isValidId } from '../helpers/isValidId';
import { colorService } from '../services/color.service';

const getAll: Controller = async (req, res) => {
  const users = await userService.findAll();

  res.send(users)
};

const findById: Controller = async (req, res) => {
  const { id: idParams } = req.params;
  const id = Number(idParams);

  if (!id || Number.isNaN(id) || !isFinite(id) || id <= 0) {
    res.sendStatus(400);
    return;
  }

  const user = await userService.findById(id);

  if (!user) {
    res.sendStatus(404);
    return;
  }

  res.send(user);
};

const create: Controller = async (req, res) => {
  const params = req.body;

  const name = params.name;
  const carColorId = Number(params.carColorId);

  if (!isValidId(carColorId)) {
    res.status(400).send('Invalid carColorId');
    return;
  }

  if (!name || typeof name !== 'string') {
    res.status(400).send('Invalid name');
    return;
  }

  const color = await colorService.findById(carColorId);

  if (!color) {
    res.status(404).send('Color not found');
    return;
  }

  const newUser = await userService.create({
    name,
    carColorId,
  });

  res.status(201)
  res.send(newUser);
}

export const userController = {
  getAll,
  findById,
  create,
}
