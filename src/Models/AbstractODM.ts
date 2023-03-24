import { Model, Schema, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  readonly model: Model<T>;
  private schema: Schema<T>;

  constructor(schema: Schema<T>, modelName: string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  create = (obj: T): Promise<T> => this.model.create(obj);
  findById = (id: string): Promise<T | null> => this.model.findById(id).exec();
  findAll = async (): Promise<T[]> => this.model.find();
}

export default AbstractODM;

// retirado do lectures/backend/12.2
