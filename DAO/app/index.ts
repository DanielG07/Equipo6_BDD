import {Venta} from "./user";
import VentasDAO from "./users.dao";


/* import { readline } from 'readline' */


const fn = async () => {
	const db = new VentasDAO();


// Muestra lo obtenido de Mysql
	const users: Venta[] = await db.getSales();
	console.log(users);
	
// Obtiene solo un valor (Falta corregir para poder solocitar ese valor)
/* 	const user: Venta = await db.getSale(users[1].Name);
	console.log(user); */
	
// Muestra lo obtenido de SQL server
	const defunciones: Venta[] = await db.getSalesSQL();
	console.log(defunciones);

};

fn();
