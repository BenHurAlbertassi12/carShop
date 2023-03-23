import express from 'express';
import carRouter from './Routes/routeCar';
import motocycleRouter from './Routes/routeMotorcycles';

const app = express();

app.use('/cars', carRouter);
app.use('/motorcycles', motocycleRouter);

export default app;
