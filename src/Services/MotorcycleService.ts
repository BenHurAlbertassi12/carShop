import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import ErrorMess from '../utils/ErrorMess';

class MotorcycleService {
  private ODMMoto: MotorcycleODM;

  constructor(ODMMoto: MotorcycleODM) {
    this.ODMMoto = ODMMoto;
  }

  public async createCarService(
    objMoto: IMotorcycle,
  ): Promise<IMotorcycle | null> {
    const newMot = await this.ODMMoto.create(objMoto);
    return new Motorcycle(newMot).specification();
  }
  public async AllService(): Promise<IMotorcycle[] | null> {
    const carMap = await this.ODMMoto.findAll();
    return carMap.map(
      ({ id, model, year, color, status, buyValue, category, engineCapacity }) => ({
        id,
        model,
        year,
        color,
        status,
        buyValue,
        category,
        engineCapacity,
      }),
    );
  }

  public async findService(id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) throw new ErrorMess(422, 'Invalid mongo id');
    const findCar = await this.ODMMoto.findById(id);

    if (findCar === null) throw new ErrorMess(404, 'Motorcycle not found');
    return new Motorcycle(findCar).specification();
  }
}

export default MotorcycleService;
