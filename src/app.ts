import express from 'express';
import carRouter from './Routes/routeCar';
import motocycleRouter from './Routes/routeMotorcycles';
import UtilsErr from './utils/ErrorUtils';

const app = express();
app.use(express.json());

app.use('/cars', carRouter);
app.use('/motorcycles', motocycleRouter);
app.use(UtilsErr.handle);

export default app;
