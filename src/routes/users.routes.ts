import { Router } from 'express';
import { userController } from '../controllers/user.controller';

export const usersRoutes = Router();

usersRoutes.get('/users', userController.getAll);

usersRoutes.post('/users', userController.create);

usersRoutes.get('/users/:id', userController.findById);
