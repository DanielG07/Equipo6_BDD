"use strict";
exports.__esModule = true;
exports.sqlConfig = exports.connection = void 0;
var mysql2_1 = require("mysql2");
var sql = require('mssql');
// create the connection to database in MYSQL
var connection = (0, mysql2_1.createConnection)({
    host: "localhost",
    user: "root",
    database: "adventureworks",
    password: ""
});
exports.connection = connection;
// create the connection to database in SQL Server
var sqlConfig = {
    user: 'sa',
    password: 'Datos2021',
    database: 'AdventureWorks2017',
    server: 'localhost\\CLASEBASEDEDATOS',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
exports.sqlConfig = sqlConfig;
