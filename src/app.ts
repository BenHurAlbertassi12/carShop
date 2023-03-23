import express from 'express';
import carRouter from './Routes/routeCar';

const app = express();

app.use('/cars', carRouter);

export default app;
