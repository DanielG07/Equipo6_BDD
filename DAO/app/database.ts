import { createConnection } from "mysql2";
const sql = require('mssql')

// create the connection to database in MYSQL
const connection = createConnection(
	{
		host: "localhost",
		user: "root",
		database: "AdventureWorks2019",
		password: "Yuval1302",	
	}
);

// create the connection to database in SQL Server
const sqlConfig = {
	user: 'sa',
  	password: 'Yuval1302',
	database: 'AdventureWorks2019',
	server: 'localhost\\MSSQLSERVER1',
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
