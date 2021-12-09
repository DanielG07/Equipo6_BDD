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
    let result = await request.query('select TerritoryID, count(*) from Sales.SalesOrderHeader group by TerritoryID order by TerritoryID ASC')
    

    return result.recordset;
}


export default recuperarVentas
