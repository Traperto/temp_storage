import jsonwebtoken = require('jsonwebtoken');
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { config } from '../.environment';

/**
 * This class contains functions to authorize a request by given JWT.
 */
export class AuthController {
    /**
     * @returns RequstHandler Middleware that checks if a request contains an "Authorization"-header containing a valid JWT.
     * The handler will send a "400 - Unauthorized" if no header is set or JWT is not valid. 
     * The secret or public-key for verification is stored in .environment.ts
     */
    public static getAuthMiddleware(): RequestHandler {
        return (request: Request, response: Response, next: NextFunction) => {
            const authHeader: string = request.get('Authorization') || '';

            if (authHeader.includes('Bearer') === false) {
                response.status(401).send('Unauthorized');
                return;
            }

            const token: string = authHeader.replace('Bearer', '').trim();

            jsonwebtoken.verify(token, config.jwt.secretOrPublicKey, config.jwt.options, (error) => {
                if (error) {
                    console.log(error);
                    response.status(401).send('Unauthorized');
                    return;
                }

                next();
            })
        };
    }
}