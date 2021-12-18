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
  let consulta4 = await request.query('exec actualizar_descuento_producto "10", "0.40"')
  return consulta4.recordset;
}
async function getConsulta5() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta5 = await request.query('exec razon_ordenes_listar 4')
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
  let consulta7 = await request.query("exec  actualizar_oferta_producto '2', '680'")
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
  let consulta9 = await request.query("exec productomasvendido '4'")
  return consulta9.recordset;
}
async function getConsulta10() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta10 = await request.query('exec ofertas_terri5')
  return consulta10.recordset;
}
async function getConsulta11() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta11 = await request.query("exec productos_massolicitados '9'")
  return consulta11.recordset;
}
async function getConsulta12() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta12 = await request.query("exec productos_menossolicitados '8'")
  return consulta12.recordset;
}
async function getConsulta13() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta13 = await request.query(' exec update_credito')
  return consulta13.recordset;
}
async function getConsulta14() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta14 = await request.query('exec cliente_1y3')
  return consulta14.recordset;
}
async function getConsulta15() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta15 = await request.query('exec ventas_2a4')
  return consulta15.recordset;
}
async function getConsulta16() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta16 = await request.query('exec cambio_moneda')
  return consulta16.recordset;
}
async function getConsulta1_Segmentos() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta1_segmentos = await request.query(" exec listar_ordenes_por_metodo '5'")
  return consulta1_segmentos.recordset;
}
async function getConsulta2_Segmentos() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta2_segmentos = await request.query('exec listar_5_representantes')
  return consulta2_segmentos.recordset;
}
async function getConsulta3_Segmentos() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta3_segmentos = await request.query('exec listar_5_productos_mas_vendidos')
  return consulta3_segmentos.recordset;
}
async function getConsulta4_Segmentos() {
  await sql.connect(sqlConfig)
  var request = new sql.Request();
  let consulta4_segmentos = await request.query('exec listar_producto_mas_caro_oferta')
  return consulta4_segmentos.recordset;
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
    getConsulta9,
    getConsulta10,
    getConsulta11,
    getConsulta12,
    getConsulta13,
    getConsulta14,
    getConsulta15,
    getConsulta16,
    getConsulta1_Segmentos,
    getConsulta2_Segmentos,
    getConsulta3_Segmentos,
    getConsulta4_Segmentos
    
  };