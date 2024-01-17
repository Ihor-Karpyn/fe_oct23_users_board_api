import express from 'express';
import cors from 'cors';
import { usersRoutes } from './routes/users.routes';
import { colorsRoutes } from './routes/colors.routes';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;
const API_URL = process.env.API_URL;

const app = express();

console.log('')

app.use(cors({
  origin: CLIENT_URL,
}))

app.use(express.json());

app.use(usersRoutes);

app.use(colorsRoutes);


app.listen(PORT, () => console.log(`API is ready on ${API_URL}:${PORT}`));
