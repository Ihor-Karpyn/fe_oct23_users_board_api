import { Request, Response } from 'express';

export type Controller = (req: Request, res: Response) => void;

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}
