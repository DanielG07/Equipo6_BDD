import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import {Card, CardActions, CardContent}from '@mui/material';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Consultas = (props) => {
    const [consulta1,SetConsulta1]= useState([]);
    const [consulta2,SetConsulta2]= useState([]);
    const [consulta3,SetConsulta3]= useState([]);
    const [consulta4,SetConsulta4]= useState([]);
    const [consulta5,SetConsulta5]= useState([]);
    const [consulta6,SetConsulta6]= useState([]);
    const [consulta7,SetConsulta7]= useState([]);
    const [consulta8,SetConsulta8]= useState([]);
    const [consulta9,SetConsulta9]= useState([]);
    const [consulta10,SetConsulta10]= useState([]);
    const [consulta11,SetConsulta11]= useState([]);
    const [consulta12,SetConsulta12]= useState([]);
    const [consulta13,SetConsulta13]= useState([]);
    const [consulta14,SetConsulta14]= useState([]);
    const [consulta15,SetConsulta15]= useState([]);
    const [consulta16,SetConsulta16]= useState([]);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);
    const [expanded3, setExpanded3] = useState(false);
    const [expanded4, setExpanded4] = useState(false);
    const [expanded5, setExpanded5] = useState(false);
    const [expanded6, setExpanded6] = useState(false);
    const [expanded7, setExpanded7] = useState(false);
    const [expanded8, setExpanded8] = useState(false);
    const [expanded9, setExpanded9] = useState(false);
    const [expanded10, setExpanded10] = useState(false);
    const [expanded11, setExpanded11] = useState(false);
    const [expanded12, setExpanded12] = useState(false);
    const [expanded13, setExpanded13] = useState(false);
    const [expanded14, setExpanded14] = useState(false);
    const [expanded15, setExpanded15] = useState(false);
    const [expanded16, setExpanded16] = useState(false);
    
    
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const handleExpandClick3 = () => {
    setExpanded3(!expanded3);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick5= () => {
    setExpanded5(!expanded5);
  };
  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };
  const handleExpandClick7 = () => {
    setExpanded7(!expanded7);
  };
  const handleExpandClick8 = () => {
    setExpanded8(!expanded8);
  };
  const handleExpandClick9 = () => {
    setExpanded9(!expanded9);
  };
  const handleExpandClick10= () => {
    setExpanded10(!expanded10);
  };
  const handleExpandClick11 = () => {
    setExpanded11(!expanded11);
  };
  const handleExpandClick12 = () => {
    setExpanded12(!expanded12);
  };
  const handleExpandClick13 = () => {
    setExpanded13(!expanded13);
  };
  const handleExpandClick14 = () => {
    setExpanded14(!expanded4);
  };
  const handleExpandClick15= () => {
    setExpanded15(!expanded15);
  };
  const handleExpandClick16 = () => {
    setExpanded16(!expanded6);
  };
    const loadConsulta1 =async()=>{

        const response = await fetch('http://localhost:4000/consulta1')
        const data = await response.json()
        console.log(data)
        SetConsulta1(data.Consulta1)
    }
    const loadConsulta2 =async()=>{

      const response = await fetch('http://localhost:4000/consulta2')
      const data = await response.json()
      console.log(data)
      SetConsulta2(data.Consulta2)
  }
  const loadConsulta3 =async()=>{
  
    const response = await fetch('http://localhost:4000/consulta3')
    const data = await response.json()
    console.log(data)
    SetConsulta3(data.Consulta3)
}
const loadConsulta4 =async()=>{

  const response = await fetch('http://localhost:4000/consulta4')
  const data = await response.json()
  console.log(data)
  SetConsulta4(data.Consulta4)
}
const loadConsulta5 =async()=>{

const response = await fetch('http://localhost:4000/consulta5')
const data = await response.json()
console.log(data)
SetConsulta5(data.Consulta5)
}
const loadConsulta6 =async()=>{

const response = await fetch('http://localhost:4000/consulta6')
const data = await response.json()
console.log(data)
SetConsulta6(data.Consulta6)
}
const loadConsulta7 =async()=>{

  const response = await fetch('http://localhost:4000/consulta7')
  const data = await response.json()
  console.log(data)
  SetConsulta7(data.Consulta7)
  }
const loadConsulta8 =async()=>{
  
  const response = await fetch('http://localhost:4000/consulta8')
  const data = await response.json()
  console.log(data)
  SetConsulta8(data.Consulta8)
}
const loadConsulta9 =async()=>{
  
  const response = await fetch('http://localhost:4000/consulta9')
  const data = await response.json()
  console.log(data)
  SetConsulta9(data.Consulta9)
}
const loadConsulta10 =async()=>{
  
  const response = await fetch('http://localhost:4000/consulta10')
  const data = await response.json()
  console.log(data)
  SetConsulta10(data.Consulta10)
}
const loadConsulta11 =async()=>{
  
  const response = await fetch('http://localhost:4000/consulta11')
  const data = await response.json()
  console.log(data)
  SetConsulta11(data.Consulta11)
}
const loadConsulta12 =async()=>{
  
  const response = await fetch('http://localhost:4000/consulta12')
  const data = await response.json()
  console.log(data)
  SetConsulta12(data.Consulta12)
}
const loadConsulta13 =async()=>{
  
  const response = await fetch('http://localhost:4000/consulta13')
  const data = await response.json()
  console.log(data)
  SetConsulta13(data.Consulta13)
}
const loadConsulta14 =async()=>{
  
  const response = await fetch('http://localhost:4000/consulta14')
  const data = await response.json()
  console.log(data)
  SetConsulta14(data.Consulta14)
}
const loadConsulta15 =async()=>{
  
  const response = await fetch('http://localhost:4000/consulta15')
  const data = await response.json()
  console.log(data)
  SetConsulta15(data.Consulta15)
}
const loadConsulta16 =async()=>{
  
  const response = await fetch('http://localhost:4000/consulta16')
  const data = await response.json()
  console.log(data)
  SetConsulta16(data.Consulta16)
}
    useEffect(()=>{
    loadConsulta1()
    loadConsulta2()
    loadConsulta3()
    loadConsulta4()
    loadConsulta5()
    loadConsulta6()
    loadConsulta7()
    loadConsulta8()
    loadConsulta9()
    loadConsulta10()
    loadConsulta11()
    loadConsulta12()
    loadConsulta13()
    loadConsulta14()
    loadConsulta15()
    loadConsulta16()
  
    },[])

return(
    <TabPanel value={props.value} index={props.index}>
       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#e8eaf6",
      }}
    >
         
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta1 </Typography>
        <Typography variant="h6">
        Ventas por territorio
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded1}
          onClick={handleExpandClick1}
         
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#f3e5f5",
          }}>

        {consulta1.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
              
            <Typography>Territorio:{get.Territorio}</Typography>
            <Typography>Ventas:{get.Ventas}</Typography>

          </div>


   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#fce4ec",
      }}
    >
         
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta2 </Typography>
        <Typography variant="h6">
        Ventas por tienda
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded2}
          onClick={handleExpandClick2}
         
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded2} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#ffebee",
          }}>

        {consulta2.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
              
            <Typography>Territorio:{get.Territorio}</Typography>
            <Typography>Ventas:{get.Ventas}</Typography>

          </div>


   ))}
   </CardContent>
      </Collapse>
       </Card>
    
       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#e0f7fa",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta3 </Typography>
        <Typography variant="h6">
        Clientes que pertenecen a cada territorio
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded3}
          onClick={handleExpandClick3}
         
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded3} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#e3f2fd",
          }}>
        {consulta3.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography>Territorio:{get.Territorio}</Typography>
            <Typography>Total de clientes:{get.Total_Clientes}</Typography>
          </div>


   ))}
   </CardContent>
      </Collapse>
       </Card>
       
       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#f1f8e9",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta4 </Typography>
        <Typography variant="h6">
        Oferta de llantas de montaña con un descuento del 40%
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded4}
          onClick={handleExpandClick4}
         
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded4} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#e8f5e9",
          }}>
        {consulta4.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography>Id:{get.SpecialOfferID}</Typography>
            <Typography>Descripcion:{get.Description}</Typography>
            <Typography>Territorio:{get.DiscountPct}</Typography>
            <Typography>Tipo:{get.Type}</Typography>
            <Typography>Categoria:{get.Category}</Typography>
            <Typography>Total de clientes#e0f2f1:{get.StartDate}</Typography>
            <Typography>Territorio:{get.EndDate}</Typography>
            <Typography>Total de clientes:{get.ModifiedDate}</Typography>
              </div>


   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#fff8e1",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 5 </Typography>
        <Typography variant="h6">
        Ordenes realizadas debidas a anuncio de revista
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded5}
          onClick={handleExpandClick5}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded5} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#fffde7",
          }}>
        {consulta5.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography>Orden:{get.Orden}</Typography>
            <Typography>Razon:{get.Razon}</Typography>
            <Typography>Territorio:{get.Territorio}</Typography>
              </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#f3e5f5",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 6 </Typography>
        <Typography variant="h6">
        Ordenes hechas por cada representante de ventas
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded6}
          onClick={handleExpandClick6}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded6} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#e8eaf6",
          }}>
        {consulta6.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography>Representante de ventas: {get.Representante_Ventas}</Typography>
            <Typography>Total de ordenes: {get.Total_Ordenes}</Typography>
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#ffebee",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 7 </Typography>
        <Typography variant="h6">
        "HL Road Frame - Black, 58" a la oferta "Descuento por volumen 11 a 14"
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded7}
          onClick={handleExpandClick7}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded7} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#fce4ec",
          }}>
        {consulta7.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography>Representante de ventas: {get.SpecialOfferID}</Typography>
            <Typography>Total de ordenes: {get.ProductoID}</Typography>
            <Typography>Total de ordenes: {get.rowguid}</Typography>
            <Typography>Total de ordenes: {get.ModifiedDate}</Typography>
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#e1f5fe",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 8 </Typography>
        <Typography variant="h6">
        Total de venta por PersonID
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded8}
          onClick={handleExpandClick8}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded8} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#e0f7fa",
          }}>
        {consulta8.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography> Territorio: {get.Territorio}</Typography>
            <Typography>Representante de ventas: {get.Representante_Ventas}</Typography>
            <Typography>Total de ventas: {get.Total_Ventas}</Typography>
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#e8f5e9",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 9 </Typography>
        <Typography variant="h6">
        Ventas por tienda
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded9}
          onClick={handleExpandClick9}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded9} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#f9fbe7",
          }}>
        {consulta9.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography> Id: {get.ProductoID}</Typography>
            <Typography>Nombre: {get.Nombre}</Typography>
            <Typography>Total de Ordenes: {get.Total_Ordenes}</Typography>
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#fffde7",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 10 </Typography>
        <Typography variant="h6">
        Productos con ofertas en el territorio 5
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded10}
          onClick={handleExpandClick10}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded10} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#fff8e1",
          }}>
        {consulta10.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography> Territorio: {get.Territorio}</Typography>
            <Typography>Producto: {get.ProductID}</Typography>
            <Typography>Ofertas: {get.Ofertas}</Typography>
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#fce4ec",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 11 </Typography>
        <Typography variant="h6">
        Ventas por tienda
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded11}
          onClick={handleExpandClick11}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded11} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#ffebee",
          }}>
        {consulta11.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography> Id: {get.ProductoID}</Typography>
            <Typography>Nombre: {get.Nombre}</Typography>
            <Typography>Total deCompras: {get.Total_Compras}</Typography>
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#e8eaf6",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 12 </Typography>
        <Typography variant="h6">
        Ventas por tienda
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded12}
          onClick={handleExpandClick12}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded12} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#f3e5f5",
          }}>
        {consulta12.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography> Id: {get.ProductoID}</Typography>
            <Typography>Nombre: {get.Nombre}</Typography>
            <Typography>Total deCompras: {get.Total_Compras}</Typography>
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#e1f5fe",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 13 </Typography>
        <Typography variant="h6">
        Ventas por tienda
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded13}
          onClick={handleExpandClick13}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded13} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#e3f2fd",
          }}>
        {consulta13.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography> Id: {get.CreditCardID}</Typography>
            <Typography>Nombre: {get.CardType}</Typography>
            <Typography>Total deCompras: {get.CardNumber}</Typography>
            <Typography> Id: {get.ExpYear}</Typography>
            <Typography>Nombre: {get.ExpMonth}</Typography>
            <Typography>Total deCompras: {get.ModifiedDate}</Typography>
            
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#f1f8e9",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 14 </Typography>
        <Typography variant="h6">
        Ventas por tienda
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded14}
          onClick={handleExpandClick14}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded14} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#f9fbe7",
          }}>
        {consulta14.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography> Id: {get.CustomerID}</Typography>
            <Typography>Nombre: {get.PersonID}</Typography>
            <Typography> Id: {get.TerritoryID}</Typography>
            <Typography>Nombre: {get.EAccountNumber}</Typography>
            <Typography>Nombre: {get.rowguid}</Typography>
            <Typography>Total deCompras: {get.ModifiedDate}</Typography>
            
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#fff3e0",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 15 </Typography>
        <Typography variant="h6">
        Ventas por tienda
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded15}
          onClick={handleExpandClick15}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded15} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#fff8e1",
          }}>
        {consulta15.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography> Id: {get.SalesOrderID}</Typography>
            <Typography>Nombre: {get.RevisionNumber}</Typography>
            <Typography> Id: {get.OrderDate}</Typography>
            <Typography>Nombre: {get.DueDate}</Typography>
            <Typography>Nombre: {get.ShipDate}</Typography>
            <Typography>Total deCompras: {get.Statuss}</Typography>
            <Typography>Nombre: {get.OnlineOrderFlag}</Typography>
            <Typography>Nombre: {get.SalesOrderNumber}</Typography>
            <Typography>Total deCompras: {get.PurchaseOrderNumber}</Typography>
            <Typography>Total deCompras: {get.AccountNumber}</Typography>
            
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#e8eaf6",
      }}
    >
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"> Consulta 16 </Typography>
        <Typography variant="h6">
        Ventas por tienda
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded16}
          onClick={handleExpandClick16}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded16} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#f3e5f5",
          }}>
        {consulta16.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
            <Typography> Id: {get.CurrencyRateID}</Typography>
            <Typography>Nombre: {get.CurrencyRateDate}</Typography>
            <Typography> Id: {get.FromCurrencyCode}</Typography>
            <Typography>Nombre: {get.ToCurrencyCode}</Typography>
            <Typography>Nombre: {get.AverageRate}</Typography>
            <Typography>Total deCompras: {get.ModifiedDate}</Typography>
            
             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

    </TabPanel>
)
};
    
  export default Consultas;