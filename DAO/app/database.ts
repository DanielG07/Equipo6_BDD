import { createConnection } from "mysql2";
const sql = require('mssql')

// create the connection to database in MYSQL
const connection = createConnection(
	{
		host: "localhost",
		user: "root",
		database: "adventureworks",
		password: "",	
	}
);

// create the connection to database in SQL Server
const sqlConfig = {
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
		trustServerCertificate: true,
	
	  },
  }
 

export { connection, sqlConfig };
