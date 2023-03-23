import { Request, Response, Router, NextFunction } from 'express';
import CarController from '../Controllers/CarController';

const carController = new CarController();

const routeCar = Router();

routeCar.post(
  '/', 
  (req: Request, res: Response, next: NextFunction) =>
    carController.createController(req, res, next),
);

export default routeCar;