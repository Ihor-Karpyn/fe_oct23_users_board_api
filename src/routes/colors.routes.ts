import { Router } from 'express';
import { colorController } from '../controllers/color.controller';

export const colorsRoutes = Router();

colorsRoutes.get('/colors', colorController.findAll);
