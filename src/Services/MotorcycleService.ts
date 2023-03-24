import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

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
}

export default MotorcycleService;
