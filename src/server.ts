import express from 'express';
import cors from 'cors';
import { usersRoutes } from './routes/users.routes';
import { colorsRoutes } from './routes/colors.routes';

const PORT = 5000;
const CLIENT_URL = 'http://localhost:3000';

const app = express();

console.log('')

app.use(cors({
  origin: CLIENT_URL,
}))

app.use(express.json());

app.use(usersRoutes);

app.use(colorsRoutes);


app.listen(PORT, () => console.log(`API is ready on http://localhost:${PORT}`));
