import { Sequelize } from 'sequelize-typescript';
import { models } from './models';

export const connectToDb = async () => {
  const DB_NAME = process.env.DB_NAME;
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_HOST = process.env.DB_HOST;
  const DB_PORT = process.env.DB_PORT;

  const DB_URI = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

  const sequelize = new Sequelize(DB_URI, {
    models,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
      }
    }
  });


  try {
    await sequelize.authenticate();
    console.log('Successfully connected to DB');
  } catch (e) {
    console.error('Failed to connect to DB', e);

    throw e;
  }

  return sequelize;
}
