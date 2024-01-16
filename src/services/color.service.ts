import { Color } from '../typedefs/color.typedefs';

export const colors: Color[] = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

const findAll = () => colors;

const findById = (id: number) => (
  colors.find((color) => color.id === id)
);

export const colorService = {
  findAll,
  findById
}
