import { Response, Request } from "express";
import { RecordMapper } from "../db/RecordMapper";
import { ApiController } from "./ApiController";

export class TemperatureController {
    public static async get(request: Request, response: Response) {
        ApiController.sendAsJson(RecordMapper.getAll, response);
    }

    public static async getAverage(request: Request, response: Response) {
        ApiController.sendAsJson(RecordMapper.getAverage, response);
    }

    public static async addRecord(request: Request, response: Response) {
        const temperature = request.body.temperature;
        const humidity = request.body.humidity;
        const timestamp = request.body.timestamp || (new Date()).toISOString();

        const validator = () => 
            typeof temperature === 'number'
            && typeof humidity === 'number'
            && typeof timestamp === 'string'

        const perform = () => RecordMapper.add({temperature, humidity, timestamp});

        ApiController.create(validator, perform, response);
    }
}