import express = require('express');
import { TemperatureController } from './TemperatureController';

export const apiRouter = express.Router();

apiRouter.get('/all', TemperatureController.get);
apiRouter.get('/average', TemperatureController.getAverage);
apiRouter.post('/create', express.json(), TemperatureController.addRecord);