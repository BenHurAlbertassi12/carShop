import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import ICar from '../../../src/Interfaces/IMotorcycle';
import CarsODM from '../../../src/Models/MotorcycleODM';
import CarsService from '../../../src/Services/MotorcycleService';

describe('Service Create Moto', function () {
  it('Create new Moto', async function () {
    const paramCar: ICar = {
      model: 'Tesla Model-X',
      year: 2023,
      color: 'Silver',
      status: false,
      buyValue: 100000,
      category: 'Stret',
      engineCapacity: 5,
    };
    const newCarMock = {
      id: '123456789',
      ...paramCar,
    };
    Sinon.stub(Model, 'create').resolves(newCarMock);
    const service = new CarsService(new CarsODM());
    const carCreated = await service.createCarService(paramCar);
    expect(carCreated).to.be.deep.equal(newCarMock);
  });
  afterEach(function () {
    Sinon.restore();
  });
});
