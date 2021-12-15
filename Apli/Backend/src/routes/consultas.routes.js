const { Router } = require("express");
const {
    getConsulta1
  } = require("../controllers/Consultas.controllers");
  

const router = Router();


router.get("/consulta1",async (req,res)=> {
    let Consulta1 = []
    Consulta1 = await getConsulta1()
    res.json({Consulta1: Consulta1})

    
});



module.exports = router;