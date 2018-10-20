import express = require('express');
import { TemperatureController } from './TemperatureController';

export const apiRouter = express.Router();

// TODO add authentication by JWT

apiRouter.get('/all', TemperatureController.get);
apiRouter.get('/average', TemperatureController.getAverage);
apiRouter.post('/', express.json(), TemperatureController.addRecord);