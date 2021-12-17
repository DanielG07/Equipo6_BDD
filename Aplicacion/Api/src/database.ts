import config_InstanciaA from "./config_InstanciaA";
import config from "./config_InstanciaA";
import config_InstanciaB from "./config_InstanciaB";
const sql = require('mssql')


// create the connection to database in SQL Server
const sqlConfig = {
	user: 'sa',
  	password: 'InstanciaA',
	database: 'NORTEAMERICA',
	server: 'localhost\\INSTANCIAA',
	pool: {
	  max: 10,
	  min: 0,
	  idleTimeoutMillis: 30000
	},
	options: {
		instanceName:'LSERVER',
		encrypt: true,
		trustServerCertificate: true,
	
	  },
  }
  console.log("Databse is connected to: ", sqlConfig.database)


  
export {  sqlConfig };