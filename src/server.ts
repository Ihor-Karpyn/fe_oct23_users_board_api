import dotenv from 'dotenv';
import { initExpressApp } from './initExpressApp';
import { connectToDb } from './db';

dotenv.config();

const server = async () => {
  const PORT = process.env.PORT;
  const API_URL = process.env.API_URL;

  const app = initExpressApp();

  const sequelize = await connectToDb();

  app.listen(PORT, () => console.log(`API is ready on ${API_URL}:${PORT}`));
}

server()

const variable = {
  id: 1,
  name: 'Morgan',
}

console.log(variable);

