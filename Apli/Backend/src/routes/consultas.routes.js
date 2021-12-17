const { Router } = require("express");
const {
    getConsulta1,
    getConsulta2,
    getConsulta3,
    getConsulta4,
    getConsulta5,
    getConsulta6,
    getConsulta7,
    getConsulta8,
    getConsulta9
  } = require("../controllers/Consultas.controllers");
  

const router = Router();


router.get("/consulta1",async (req,res)=> {
    let Consulta1 = []
    Consulta1 = await getConsulta1()
    res.json({Consulta1: Consulta1})
});

router.get("/consulta2",async (req,res)=> {
  let Consulta2 = []
  Consulta2 = await getConsulta2()
  res.json({Consulta2: Consulta2})
});
router.get("/consulta3",async (req,res)=> {
  let Consulta3 = []
  Consulta3 = await getConsulta3()
  res.json({Consulta3: Consulta3})
});
router.get("/consulta4",async (req,res)=> {
  let Consulta4 = []
  Consulta4 = await getConsulta4()
  res.json({Consulta4: Consulta4})
});
router.get("/consulta5",async (req,res)=> {
  let Consulta5 = []
  Consulta5 = await getConsulta5()
  res.json({Consulta5: Consulta5})
});
router.get("/consulta6",async (req,res)=> {
  let Consulta6 = []
  Consulta6 = await getConsulta6()
  res.json({Consulta6: Consulta6})
});
router.get("/consulta7",async (req,res)=> {
  let Consulta7 = []
  Consulta7 = await getConsulta7()
  res.json({Consulta7: Consulta7})
});
router.get("/consulta8",async (req,res)=> {
  let Consulta8 = []
  Consulta8 = await getConsulta8()
  res.json({Consulta8: Consulta8})
});
router.get("/consulta9",async (req,res)=> {
  let Consulta9 = []
  Consulta9 = await getConsulta9()
  res.json({Consulta9: Consulta9})
});
module.exports = router;