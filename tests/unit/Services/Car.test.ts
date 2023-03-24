import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import ICar from '../../../src/Interfaces/ICar';
import CarsODM from '../../../src/Models/CarODM';
import CarsService from '../../../src/Services/CarService';
import list from './Mock';

describe('Service Create Car', function () {
  it('Create new Car', async function () {
    const paramCar: ICar = {
      model: 'Tesla Model-X',
      year: 2023,
      color: 'Silver',
      status: false,
      buyValue: 100000,
      doorsQty: 4,
      seatsQty: 5,
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

  describe('Service Find', function () {
    it('Find car', async function () {
      Sinon.stub(Model, 'find').resolves(list);
      const service = new CarsService(new CarsODM());
      const carCreated = await service.AllService();
      expect(carCreated).to.be.deep.equal(list);
    });
  });
  afterEach(function () {
    Sinon.restore();
  });
});

// teste retirado do lectures/backend/12.2