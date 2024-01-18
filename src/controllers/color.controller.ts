import { colorService } from '../services/color.service';
import { Controller } from '../typedefs/typedfs';

const findAll: Controller = async (req, res) => {
  const colors = await colorService.findAll();

  res.send(colors);
}

export const colorController = {
  findAll,
}
