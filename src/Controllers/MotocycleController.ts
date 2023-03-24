import { NextFunction, Request, Response } from 'express';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleController {
  constructor(private motorcycleService = new MotorcycleService(new MotorcycleODM())) {}

  public async createController(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> {
    const moto: IMotorcycle = { ...req.body };
    this.motorcycleService
      .createCarService(moto)
      .then((motoc) => res.status(201).json(motoc))
      .catch((error) => next(error));
    return Promise.resolve(undefined);
  }
}

export default MotorcycleController;
