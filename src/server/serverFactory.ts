import http = require('http');
import https = require('https');
import express = require('express');
import {config} from '../.environment';

export function createServerForApp(app: express.Application): https.Server | http.Server {
    if (config.server.useHttps) {
        const tlsConf = {
            key: config.server.privateKey, 
            cert: config.server.certificate
        };

        return https.createServer(tlsConf, app);
    }

    return http.createServer(app);
}