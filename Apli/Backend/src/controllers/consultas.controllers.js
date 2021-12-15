const sqlConfig =require("../db")
const   sql = require('mssql')
async function getConsulta1(){
    await sql.connect(sqlConfig)
    var request = new sql.Request();
    let  consulta1 = await request.query("exec numero_ventas_territorio_listar '6'")
    console.log(consulta1)
    return consulta1.recordset;
}
  
  module.exports = {
   
    getConsulta1
  
    
  };