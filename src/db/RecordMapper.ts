import { databaseHandler } from "./DatabaseHandler";
import { Record } from "../models/Record";

class RecordMapper {
    public async getAll(): Promise<Array<Record>> {
        const results = await databaseHandler.query('SELECT * FROM `values`');       
        return <Array<Record>>results;
    }

    public async getAverage(): Promise<Record> {
        const result = await databaseHandler.query('SELECT AVG(`temperature`) as `temperature`, AVG(`humidity`) AS `humidity` FROM `values`');
        return <Record>result[0];
    }

    public async add(record: Record): Promise<void> {
        if (!record.timestamp) {
            record.timestamp = (new Date()).toISOString();
        }

        databaseHandler.query(
            'INSERT INTO `values` (`temperature`, `humidity`, `timestamp`) VALUES ($temperature, $humidity, $timestamp)', 
            {
                $temperature: record.temperature,
                $humidity: record.humidity,
                $timestamp: record.timestamp
            }
        );
    }
}

export const recordMapper = new RecordMapper();