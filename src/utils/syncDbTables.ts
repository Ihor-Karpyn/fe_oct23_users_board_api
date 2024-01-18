import { connectToDb } from '../db';
import { Color } from '../models/Color';
import dotenv from 'dotenv';
import { User } from '../models/User';
import { colorService } from '../services/color.service';

dotenv.config();

const initialColors = [
  { name: 'Black' },
  { name: 'DeepPink' },
  { name: 'Red' },
  { name: 'Aquamarine' },
  { name: 'Gold' },
  { name: 'YellowGreen' },
  { name: 'Yellow' },
];


const sync = async () => {
  try {

  await connectToDb();

  await Color.sync({ force: true });
  await User.sync({ force: true });

  await colorService.bulkCreate(initialColors);

  } catch (e) {
    console.log(e)
  }
};

sync();
