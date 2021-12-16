const sqlConfig =require("../db")
const   sql = require('mssql')
async function getConsulta1(){
    await sql.connect(sqlConfig)
    var request = new sql.Request();
    let  consulta1 = await request.query("exec numero_ventas_territorio_listar '6'")
    return consulta1.recordset;
}
async function getConsulta2(){
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let  consulta2 = await request.query("exec numero_ventas_tienda_listar '322'")  
  return consulta2.recordset;
}
async function getConsulta3() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let  consulta3 = await request.query('exec numero_clientes_listar "6"')
  return consulta3.recordset;
}
async function getConsulta4() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta4 = await request.query('exec razon_ordenes_listar 4')
  return consulta4.recordset;
}
async function getConsulta5() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta5 = await request.query('exec actualizar_descuento_producto "10", "0.40"')
  return consulta5.recordset;
}
async function getConsulta6() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta6 = await request.query('exec ordenes_rventas')
  return consulta6.recordset;
}
async function getConsulta7() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta7 = await request.query("exec actualizar_oferta_producto '3', '722'")
  return consulta7.recordset;
}
async function getConsulta8() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta8 = await request.query('exec ventas_person')
  return consulta8.recordset;
}
async function getConsulta9() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta9 = await request.query('exec ventas_person')
  return consulta9.recordset;
}
  module.exports = {
   
    getConsulta1,
    getConsulta2,
    getConsulta3,
    getConsulta4,
    getConsulta5,
    getConsulta6,
    getConsulta7,
    getConsulta8,
    getConsulta9
    
  };