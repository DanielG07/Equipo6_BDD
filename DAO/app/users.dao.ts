import InterfaceDAO from "./interfaceDAO";
import { connection, sqlConfig } from "./database";
const sql = require('mssql')

import { Venta } from "./user";


class VentasDAO implements InterfaceDAO {
	constructor() { }
	

	async getSale(name: string) {
		// mysql
		const connPrommise = connection.promise();
		const [row] = (
			await connPrommise.query('select * from SalesReason where Name = ?', name)
		)[0] as unknown as Venta[];
		const user = new Venta(row.SalesReasonID, row.Name, row.ReasonType, row.ModifiedDate);

		return user;
	}

	async getSales() {
		// Mysql
		const connPrommise = connection.promise();
		const rows = (await connPrommise.query("select * from SalesReason"))[0] as unknown as Venta[];
		return rows;

	}
	
	async getSalesSQL() {
		// SQL server
	
		await sql.connect(sqlConfig);

		var ventas: any[] = []
		var request = new sql.Request();
		let result = await request.query('select * from Sales.SalesReason')
		
		if(result !== null){
			if(result.rowsAffected[0]>0){
				result.recordset.forEach(venta => {
					ventas.push(venta as Venta)
				});
				return ventas
			}
			else {
				console.log('tabla esta vacia')
			}
		} 
		else {
			console.log('hubo un error de algo')
		}

	}
}

export default VentasDAO;
