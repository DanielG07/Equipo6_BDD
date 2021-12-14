"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlConfig = void 0;
const sql = require('mssql');
// create the connection to database in SQL Server
const sqlConfig = {
    user: 'sa',
    password: 'Irvin19+',
    database: 'AdventureWorks2019',
    server: 'localhost\\INSTANCIAA',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};
exports.sqlConfig = sqlConfig;
console.log("Databse is connected to: ", sqlConfig.database);
