import express = require('express');
import {router} from './api/routes';
import * as serverFactory from './server/serverFactory';
import { config } from './.environment';

const app: express.Application = express();
const server = serverFactory.createServerForApp(app);

app.use(router);
app.disable('x-powered-by');

server.listen(config.server.port);
console.log(`Server will listen on port ${config.server.port}`);