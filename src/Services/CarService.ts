import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';
import ErrorMess from '../utils/ErrorMess';

export default class CarService {
  private ODMcar: CarODM;

  constructor(ODMcar: CarODM) {
    this.ODMcar = ODMcar;
  }

  public async createCarService(paramCar: ICar): Promise<ICar | null> {
    const newCar = await this.ODMcar.create(paramCar);
    return new Car(newCar).specification();
  }
  
  public async AllService(): Promise<ICar[] | null> {
    const carMap = await this.ODMcar.findAll();
    return carMap.map(
      ({ id, model, year, color, status, buyValue, doorsQty, seatsQty }) => ({
        id,
        model,
        year,
        color,
        status,
        buyValue,
        doorsQty,
        seatsQty,
      }),
    );
  }

  public async findService(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new ErrorMess(422, 'Invalid mongo id');
    const findCar = await this.ODMcar.findById(id);
  
    if (findCar === null) throw new ErrorMess(404, 'Car not found');
    return new Car(findCar).specification();
  }
}
