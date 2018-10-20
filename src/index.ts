import express = require('express');
import {apiRouter} from './api/Routes';
import {ServerFactory} from './server/ServerFactory';
import { AuthController } from './api/AuthController';
import { config } from './.environment';

const app: express.Application = express();
const server = ServerFactory.createServerForApp(app);

app.use(AuthController.getAuthMiddleware());
app.use(apiRouter);
app.disable('x-powered-by');

server.listen(config.server.port);
console.log(`Server will listen on port ${config.server.port}`);