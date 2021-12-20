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
  } = require("../controllers/consultas.controllers");
  

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
router.get("/consulta10",async (req,res)=> {
  let Consulta10 = []
  Consulta10 = await getConsulta10()
  res.json({Consulta10: Consulta10})
});
router.get("/consulta11",async (req,res)=> {
  let Consulta11 = []
  Consulta11 = await getConsulta11()
  res.json({Consulta11: Consulta11})
});
router.get("/consulta12",async (req,res)=> {
  let Consulta12 = []
  Consulta12 = await getConsulta12()
  res.json({Consulta12: Consulta12})
});
router.get("/consulta12",async (req,res)=> {
  let Consulta12 = []
  Consulta12 = await getConsulta12()
  res.json({Consulta12: Consulta12})
});
router.get("/consulta13",async (req,res)=> {
  let Consulta13 = []
  Consulta13 = await getConsulta13()
  res.json({Consulta13: Consulta13})
});
router.get("/consulta14",async (req,res)=> {
  let Consulta14 = []
  Consulta14 = await getConsulta14()
  res.json({Consulta14: Consulta14})
});
router.get("/consulta15",async (req,res)=> {
  let Consulta15 = []
  Consulta15 = await getConsulta15()
  res.json({Consulta15: Consulta15})
});
router.get("/consulta16",async (req,res)=> {
  let Consulta16 = []
  Consulta16 = await getConsulta16()
  res.json({Consulta16: Consulta16})
});
router.get("/consulta1_segmento",async (req,res)=> {
  let Consulta1_Segmentos = []
  Consulta1_Segmentos = await getConsulta1_Segmentos()
  res.json({Consulta1_Segmentos: Consulta1_Segmentos})
});
router.get("/consulta2_segmento",async (req,res)=> {
  let Consulta2_Segmentos = []
  Consulta2_Segmentos = await getConsulta2_Segmentos()
  res.json({Consulta2_Segmentos: Consulta2_Segmentos})
});
router.get("/consulta3_segmento",async (req,res)=> {
  let Consulta3_Segmentos = []
  Consulta3_Segmentos = await getConsulta3_Segmentos()
  res.json({Consulta3_Segmentos: Consulta3_Segmentos})
});
router.get("/consulta4_segmento",async (req,res)=> {
  let Consulta4_Segmentos = []
  Consulta4_Segmentos = await getConsulta4_Segmentos()
  res.json({Consulta4_Segmentos: Consulta4_Segmentos})
});
module.exports = router;