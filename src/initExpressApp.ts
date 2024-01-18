import express from 'express';
import cors from 'cors';
import { usersRoutes } from './routes/users.routes';
import { colorsRoutes } from './routes/colors.routes';

export const initExpressApp = () => {
  const CLIENT_URL = process.env.CLIENT_URL;

  const app = express();

  app.use(cors({
    origin: CLIENT_URL,
  }))

  app.use(express.json());

  app.use(usersRoutes);

  app.use(colorsRoutes);

  return app;
}
