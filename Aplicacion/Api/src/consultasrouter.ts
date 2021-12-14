import { Router } from "express";
import  recuperarVentas from "./SalesOrderHeader";
import  Consulta8 from "./SalesOrderHeader";
const router= Router();

router.get("/consulta", (req,res)=> res.json('getting consulta'));

router.get("/recuperar",async (req,res)=> {
    let ventas = []
    ventas = await Consulta8()
    res.json({ventas: ventas})

    
});
export default  router;