
const sql= require('mssql')
const sqlConfig={
    user:'sa',
    password:'InstanciaA',
    server:'localhost\\INSTANCIAA',
    database:'NORTEAMERICA',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 50000
      },
      options: {
        instanceName:'LSERVER',
        encrypt: true, // for azure
        enableArithAbort: true,
        trustServerCertificate: true // change to true for local dev / self-signed certs
      }
};
module.exports = sqlConfig;