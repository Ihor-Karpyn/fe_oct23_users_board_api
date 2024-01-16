import express from 'express';
import cors from 'cors';
import { userController } from './controllers/user.controller';
import { colorController } from './controllers/color.controller';

const PORT = 5000;
const CLIENT_URL = 'http://localhost:3000';

const app = express();

console.log('')

app.use(cors({
  origin: CLIENT_URL,
}))

app.use(express.json());

app.get('/users', userController.getAll);

app.post('/users', userController.create);

app.get('/users/:id', userController.findById);

app.get('/colors', colorController.findAll);

app.listen(PORT, () => console.log(`API is ready on http://localhost:${PORT}`));
