import { NextFunction, Request, Response } from 'express';
import IError from '../Interfaces/IError';

class UtilsErr {
  public static handle(
    error: IError,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.status || 500).json({ message: error.message });
    next();
  }
}

export default UtilsErr;
