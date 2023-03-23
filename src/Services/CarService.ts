import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

export default class CarService {
  private ODMcar: CarODM;

  constructor(ODMcar: CarODM) {
    this.ODMcar = ODMcar;
  }

  public async createCarService(paramCar: ICar): Promise<ICar | null> {
    const newCar = await this.ODMcar.create(paramCar);
    return new Car(newCar).specification();
  }
}
