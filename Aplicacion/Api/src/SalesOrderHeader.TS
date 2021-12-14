import { prototype } from "events";
import { appendFile } from "fs";

var sql = require('mssql')
import { sqlConfig } from "./database";



interface Ventas { 
    ventas:[],
    id: number,
    descripcion: string
}

async function recuperarVentas(){
    await sql.connect(sqlConfig)
    let ventasInt: any[] = []
   
    var request = new sql.Request();
    let result = await request.query('exec numero_ventas_territorio_listar "6"')
    
    return result.recordset;
}
async function Consulta2() {
    await sql.connect(sqlConfig)
    let ventasInt: any[] = []
    var request = new sql.Request();
    let result = await request.query('exec numero_ventas_tienda_listar 322')
    return result.recordset;
}
async function Consulta3() {
    await sql.connect(sqlConfig)
    let ventasInt: any[] = []
    var request = new sql.Request();
    let result = await request.query('exec numero_clientes_listar "6"')
    return result.recordset;
}
async function Consulta4() {
    await sql.connect(sqlConfig)
    let ventasInt: any[] = []
    var request = new sql.Request();
    let result = await request.query('exec razon_ordenes_listar 4')
    return result.recordset;
}
async function Consulta5() {
    await sql.connect(sqlConfig)
    let ventasInt: any[] = []
    var request = new sql.Request();
    let result = await request.query('exec actualizar_descuento_producto "10", "0.40"')
    return result.recordset;
}
async function Consulta6() {
    await sql.connect(sqlConfig)
    let ventasInt: any[] = []
    var request = new sql.Request();
    let result = await request.query('exec razon_ordenes_listar 4')
    return result.recordset;
}
async function Consulta7() {
    await sql.connect(sqlConfig)
    let ventasInt: any[] = []
    var request = new sql.Request();
    let result = await request.query('exec ordenes_rventas')
    return result.recordset;
}
async function Consulta8() {
    await sql.connect(sqlConfig)
    let ventasInt: any[] = []
    var request = new sql.Request();
    let result = await request.query('exec ventas_person')
    return result.recordset;
}
 

export default Consulta8

