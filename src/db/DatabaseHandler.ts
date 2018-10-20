import sqlite3 = require('sqlite3');
import { Statement } from 'sqlite3';
import { config } from '../.environment';

class DatabaseHandler {
    private db: sqlite3.Database;

    constructor() {
        this.db = new sqlite3.Database(config.sqlite.path);
    }

    public query(sql: string, parameters?: Array<string | number | null> | Object): Promise<Array<Object>> {
        return new Promise((resolver, rejector) =>
            this.db.all(sql, parameters, (error, rows: Array<Object>) => {
                if (error) {
                    return rejector(error);
                }
                return resolver(rows);
            })
        );
    }

    public prepare(sql: string, parameters?: Array<string | number | null> | Object): Promise<Statement> {
        return new Promise((resolver, rejector) => {
            const statement = this.db.prepare(sql, parameters, (error, rows: Array<string | number | null>) => {
                if (error) {
                    return rejector(error);
                }
            })

            return resolver(statement);
        });
    }
}

// Export as a single instance to prevent having multiple connections open at one time
export const databaseHandler = new DatabaseHandler();