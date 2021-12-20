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
        ><Typography variant="h5"><b> Consulta 1 </b></Typography>
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
              
            <Typography><b>Territorio: </b>{get.Territorio}</Typography>
            <Typography><b>Ventas: </b>{get.Ventas}</Typography>

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
        ><Typography variant="h5"><b> Consulta 2 </b></Typography>
        <Typography variant="h6">
        Ventas por tienda - Ejemplo: Tienda 322
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
              
            <Typography><b>Territorio: </b>{get.Territorio}</Typography>
            <Typography><b>Tienda: </b>{get.Tienda}</Typography>
            <Typography><b>Ventas: </b>{get.Ventas}</Typography>

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
        ><Typography variant="h5"><b> Consulta 3 </b></Typography>
        <Typography variant="h6">
        Clientes que pertenecen a cada territorio - Ejemplo: Territorio 6
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
            <Typography><b>Territorio: </b>{get.Territorio}</Typography>
            <Typography><b>Total de clientes: </b>{get.Total_Clientes}</Typography>
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
        ><Typography variant="h5"><b> Consulta 4 </b></Typography>
        <Typography variant="h6">
        Actualización de Oferta de llantas de montaña con un descuento del 40%
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
            <Typography><b>Special Offer ID: </b>{get.SpecialOfferID}</Typography>
            <Typography><b>Descripcion: </b>{get.Description}</Typography>
            <Typography><b>DicountPct: </b>{get.DiscountPct}</Typography>
            <Typography><b>Tipo: </b>{get.Type}</Typography>
            <Typography><b>Categoria: </b>{get.Category}</Typography>
            <Typography><b>Fecha de Inicio: </b>{get.StartDate}</Typography>
            <Typography><b>Fecha de fin: </b>{get.EndDate}</Typography>
            <Typography><b>Fecha de Modificación: </b>{get.ModifiedDate}</Typography>
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
        ><Typography variant="h5"><b> Consulta 5 </b></Typography>
        <Typography variant="h6">
        Ordenes realizadas debido a anuncio de revista
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
            <Typography><b>Orden: </b>{get.Orden}</Typography>
            <Typography><b>Razon: </b>{get.Razon}</Typography>
            <Typography><b>Territorio: </b>{get.Territorio}</Typography>
            <Typography><b>-------------------------------</b></Typography>
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
        ><Typography variant="h5"><b> Consulta 6 </b></Typography>
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
            <Typography><b>Representante de ventas: </b>{get.Representante_Ventas}</Typography>
            <Typography><b>Total de ordenes: </b>{get.Total_Ordenes}</Typography>
            <Typography><b>-------------------------------------------------</b></Typography>
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
        ><Typography variant="h5"><b> Consulta 7 </b></Typography>
        <Typography variant="h6">
        Agregar el producto "HL Road Frame - Black, 58" a la oferta "Descuento por volumen 11 a 14"
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
            <Typography><b>SpecialOfferID: </b>{get.SpecialOfferID}</Typography>
            <Typography><b>ProductID: </b>{get.ProductID}</Typography>
            <Typography><b>Rowguid: </b>{get.rowguid}</Typography>
            <Typography><b>Fecha de modificacion: </b>{get.ModifiedDate}</Typography>
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
        ><Typography variant="h5"><b> Consulta 8 </b></Typography>
        <Typography variant="h6">
        Total de ventas por PersonID
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
            <Typography><b>Territorio: </b>{get.Territorio}</Typography>
            <Typography><b>Representante de ventas: </b>{get.Representante_Ventas}</Typography>
            <Typography><b>Total de ventas: </b>{get.Total_Ventas}</Typography>
            <Typography><b>---------------------------------</b></Typography>
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
        ><Typography variant="h5"><b> Consulta 9 </b></Typography>
        <Typography variant="h6">
        Producto más vendido por categoria - Ejemplo: Categoria 4
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
            <Typography><b>ID del Producto: </b>{get.ProductoID}</Typography>
            <Typography><b>Nombre: </b>{get.Nombre}</Typography>
            <Typography><b>Total de Ordenes: </b>{get.Total_Ordenes}</Typography>
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
        ><Typography variant="h5"><b> Consulta 10 </b></Typography>
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
            <Typography><b>Territorio: </b>{get.Territorio}</Typography>
            <Typography><b>Producto: </b>{get.ProductID}</Typography>
            <Typography><b>Ofertas: </b>{get.Ofertas}</Typography>
            <Typography><b>------------------------------</b></Typography>
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
        ><Typography variant="h5"><b> Consulta 11 </b></Typography>
        <Typography variant="h6">
        TOP 5 productos más solicitados en cada territorio - Ejemplo: Territorio 9
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
            <Typography><b>Id del Producto: </b>{get.ProductoID}</Typography>
            <Typography><b>Nombre: </b>{get.Nombre}</Typography>
            <Typography><b>Total de Compras: </b>{get.Total_Compras}</Typography>
            <Typography><b>-------------------------------------------------------</b></Typography>
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
        ><Typography variant="h5"><b> Consulta 12 </b></Typography>
        <Typography variant="h6">
        Producto menos solicitado por territorio - Ejemplo: Territorio 8
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
            <Typography><b>ID del Producto: </b>{get.ProductoID}</Typography>
            <Typography><b>Nombre: </b>{get.Nombre}</Typography>
            <Typography><b>Total de Compras: </b>{get.Total_Compras}</Typography>
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
        ><Typography variant="h5"><b> Consulta 13 </b></Typography>
        <Typography variant="h6">
        Actualizar nombre de tarjeta de crédito SuperiorCard a SCard
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
            <Typography><b>Id de Tarjeta de Credito: </b>{get.CreditCardID}</Typography>
            <Typography><b>Tipo de tarjeta: </b>{get.CardType}</Typography>
            <Typography><b>Numero de tarjeta: </b>{get.CardNumber}</Typography>
            <Typography><b>Año de expiracion: </b>{get.ExpYear}</Typography>
            <Typography><b>Mes de expiracion: </b>{get.ExpMonth}</Typography>
            <Typography><b>Fecha de modificación: </b>{get.ModifiedDate}</Typography>
            <Typography>-----------------------------------------------------------------------------------------</Typography>
            
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
        ><Typography variant="h5"><b> Consulta 14 </b></Typography>
        <Typography variant="h6">
        Registros con ID de territorio de clientes 1 y 3
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
            <Typography><b>ID del Cliente: </b>{get.CustomerID}</Typography>
            <Typography><b>PersonID: </b>{get.PersonID}</Typography>
            <Typography><b>TerritorioID: </b>{get.TerritoryID}</Typography>
            <Typography><b>Numero de Cuenta: </b>{get.EAccountNumber}</Typography>
            <Typography><b>Rowguid: </b>{get.rowguid}</Typography>
            <Typography><b>Fecha de modificacion: </b>{get.ModifiedDate}</Typography>
            <Typography><b>----------------------------------------------------------------------------------------</b></Typography>
            
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
        ><Typography variant="h5"><b> Consulta 15 </b></Typography>
        <Typography variant="h6">
        Ventas con costo mayor a 2000 y menor a 4000
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
            <Typography><b>Sales Order ID: </b>{get.SalesOrderID}</Typography>
            <Typography><b>Revison Number: </b>{get.RevisionNumber}</Typography>
            <Typography><b>Fecha de orden: </b>{get.OrderDate}</Typography>
            <Typography><b>Fecha de vencimiento: </b>{get.DueDate}</Typography>
            <Typography><b>Fecha de envio: </b>{get.ShipDate}</Typography>
            <Typography><b>Estatus: </b>{get.Statuss}</Typography>
            <Typography><b>Onlline Order Flag: </b>{get.OnlineOrderFlag}</Typography>
            <Typography><b>Sales Order Number: </b>{get.SalesOrderNumber}</Typography>
            <Typography><b>Puchase Order Number: </b>{get.PurchaseOrderNumber}</Typography>
            <Typography><b>Numero de cuenta: </b>{get.AccountNumber}</Typography>
            <Typography><b>-------------------------------------------------------------------------------------------</b></Typography>
            
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
        ><Typography variant="h5"><b> Consulta 16 </b></Typography>
        <Typography variant="h6">
        Listado de cambio de moneda de USD a MXN
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
            <Typography><b>ID de Tasa de Cambio: </b>{get.CurrencyRateID}</Typography>
            <Typography><b>Fecha de Tasa de Cambio: </b>{get.CurrencyRateDate}</Typography>
            <Typography><b>Del Codigo de Moneda: </b>{get.FromCurrencyCode}</Typography>
            <Typography><b>Al Codigo de Moneda: </b>{get.ToCurrencyCode}</Typography>
            <Typography><b>Tasa promedio: </b>{get.AverageRate}</Typography>
            <Typography><b>Tasa al final del dia: </b>{get.EndOfDayRate}</Typography>
            <Typography><b>Fecha de modificacion: </b>{get.ModifiedDate}</Typography>
            <Typography><b>------------------------------------------------------------------------------------</b></Typography>

             </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

    </TabPanel>
)
};
    
  export default Consultas;