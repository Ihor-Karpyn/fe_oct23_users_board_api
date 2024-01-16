import { colorService } from '../services/color.service';
import { Controller } from '../typedefs/typedfs';

const findAll: Controller = (req, res) => {
  const colors = colorService.findAll();

  res.send(colors);
}

export const colorController = {
  findAll,
}
