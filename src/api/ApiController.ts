import { Response } from "express";

/**
 * This class contains some functions that can handle basic types of requests.
 */
export class ApiController {
    /**
     * Will send the data - as provided by dataProvider - as JSON with status 200.
     * If dataProvider throws an Error, it will log an internal warning and return a 500
     */
    public static async sendAsJson(dataProvider: Function, response: Response) {
        try {
            const data = await dataProvider();
            response.status(200).json(data);

        } catch (error) {
            console.error(error);
            response.status(500).send('Internal Server Error');
        }
    }

    /**
     * Will try to create a resource and returns result of dataProvider (if given)
     * @param validator Function (returning boolean). If it returns false, a "400 - Bad Request" will be sent. Otherwise the dataProvider will be called.
     * @param dataProvider Function. This function contains the "generation" of the resource. If it returns something, this will be send as JSON.
     * If nothing is returned, it will send a simple "201 - Created"
     * If it throws an Error, it will log an internal warning and return a 500
     */
    public static async create(validator: Validator, dataProvider: Function, response: Response) {
        try {
            if (validator() === false) {
                // If validation fails -> 400
                response.status(400).send('Bad Request');
                return;
            }

            const data = await dataProvider();
            
            if (!data) {
                // No data provided by dataProvider... Since no Error was thrown, creation should be successful -> 201
                response.status(201).send('Created');
                return;
            }

            // Data provided and no Error -> 201 with given data
            response.status(201).json(data);

        } catch (error) {
            console.error(error);
            response.status(500).send('Internal Server Error');
        }
    }
}

interface Validator {
    /**
     * Returns whether a request will be valid or not by returning a boolean. (success === true)
     * API will return a "400 - Bad Request" if validator returns false
     */
    (): boolean;
}