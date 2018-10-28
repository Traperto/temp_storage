import { databaseHandler } from "./DatabaseHandler";
import { Record } from "../models/Record";

export class RecordMapper {
    public static async getAll(): Promise<Array<Record>> {
        const results = await databaseHandler.query('SELECT * FROM `values`');       
        return <Array<Record>>results;
    }

    public static async getAverage(): Promise<Record> {
        const result = await databaseHandler.query('SELECT AVG(`temperature`) as `temperature`, AVG(`humidity`) AS `humidity` FROM `values`');
        return <Record>result[0];
    }

    public static async add(record: Record): Promise<Array<Object>> {
        if (!record.timestamp) {
            record.timestamp = (new Date()).toISOString();
        }

        return databaseHandler.query(
            'INSERT INTO `values` (`temperature`, `humidity`, `timestamp`) VALUES ($temperature, $humidity, $timestamp)', 
            {
                $temperature: record.temperature,
                $humidity: record.humidity,
                $timestamp: record.timestamp
            }
        );
    }
}