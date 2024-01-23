import { Controller, SortOrder } from '../typedefs/typedfs';
import { userService } from '../services/user.sevice';
import { isValidId } from '../helpers/isValidId';
import { colorService } from '../services/color.service';

const getSortKey = (sortByParams: string) => {
  switch (sortByParams) {
    case 'name':
      return 'name';

    case 'id':
      return 'id';

    default:
      return undefined;
  }
}

const getSortOrder = (sortOrderParams: string): SortOrder | undefined => {
  switch (sortOrderParams) {
    case 'ASC':
      return SortOrder.ASC;

    case 'DESC':
      return SortOrder.DESC;

    default:
      return  undefined;
  }
}


const getAll: Controller = async (req, res) => {
  const {
    limit: limitParams,
    offset: offsetParams,
    sortBy: sortByParams,
    sortOrder: sortOrderParams,
  } = req.query;

  const isLimitPassed = typeof limitParams === 'string';
  const limit = isLimitPassed
    ? Number(limitParams)
    : undefined;

  if (isLimitPassed && !isValidId(limit)) {
    res.status(400).send('Invalid limit');

    return;
  }

  const isOffsetPassed = typeof offsetParams === 'string';
  const offset = isOffsetPassed
    ? Number(offsetParams)
    : undefined;

  if (isOffsetPassed && !isValidId(offset)) {
    res.status(400).send('Invalid offset');

    return;
  }

  const isSortPassed = typeof sortByParams === 'string';
  const sortBy = isSortPassed
    ? getSortKey(sortByParams)
    : undefined;

  if (isSortPassed && !sortBy) {
    res.status(400).send('Invalid sortBy');

    return;
  }

  const isSortOrderPassed = typeof sortOrderParams === 'string';
  const sortOrder = isSortOrderPassed
    ? getSortOrder(sortOrderParams)
    : undefined;

  if (isSortOrderPassed && !sortOrder) {
    res.status(400).send('Invalid sortOrder');

    return;
  }

  const usersData = await userService.findAndCountAll({
    limit,
    offset,
    sortBy,
    sortOrder,
  });

  res.send(usersData)
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
