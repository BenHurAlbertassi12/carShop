import { NextFunction, Request, Response } from 'express';
import CarsODM from '../Models/CarODM';
import CarsService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

export default class CarController {
  constructor(private carsService = new CarsService(new CarsODM())) {}

  public createController(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> {
    const car: ICar = { ...req.body };
    this.carsService
      .createCarService(car)
      .then((carCreated) => res.status(201).json(carCreated))
      .catch((error) => next(error));
    return Promise.resolve(undefined);
  }
  
  public findCar(_req: Request, res: Response, next: NextFunction): void {
    this.carsService
      .AllService()
      .then((carCreated) => {
        res.status(200).json(carCreated);
      })
      .catch((error) => {
        next(error);
      });
  }

  public findById(req: Request, res: Response, next: NextFunction): void {
    this.carsService
      .findService(req.params.id)
      .then((carCreated) => {
        res.status(200).json(carCreated);
      })
      .catch((error) => {
        next(error);
      });
  }
}
