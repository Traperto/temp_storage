-- The queries must be completed with a semicolon since they are passed as one to dbms. 
CREATE TABLE IF NOT EXISTS `values` (
    `temperature` REAL NOT NULL DEFAULT 0,
    `humidity` REAL NOT NULL DEFAULT 0,
    `timestamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);