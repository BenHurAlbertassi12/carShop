import { Request, Response, Router, NextFunction } from 'express';
import MotoController from '../Controllers/MotocycleController';

const controller = new MotoController();

const motocycleRouter = Router();

motocycleRouter.post('/', (req: Request, res: Response, next: NextFunction) =>
  controller.createController(req, res, next));

motocycleRouter.get('/', (req: Request, res: Response, next: NextFunction) =>
  controller.findCar(req, res, next));

motocycleRouter.get('/:id', (req: Request, res: Response, next: NextFunction) =>
  controller.findById(req, res, next));

export default motocycleRouter;
