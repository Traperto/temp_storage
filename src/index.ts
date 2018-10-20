import express = require('express');
import {apiRouter} from './api/Routes';
import * as serverFactory from './server/serverFactory';
import { config } from './.environment';

const app: express.Application = express();
const server = serverFactory.createServerForApp(app);

app.use(apiRouter);
app.disable('x-powered-by');

server.listen(config.server.port);
console.log(`Server will listen on port ${config.server.port}`);