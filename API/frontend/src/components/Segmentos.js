import * as React from 'react';
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

const Segmentos = (props) => {
    const [consulta17,SetConsulta17]= useState([]);
    const [consulta18,SetConsulta18]= useState([]);
    const [consulta19,SetConsulta19]= useState([]);
    const [consulta20,SetConsulta20]= useState([]);
    const [expanded17, setExpanded17] = useState(false);
    const [expanded18, setExpanded18] = useState(false);
    const [expanded19, setExpanded19] = useState(false);
    const [expanded20, setExpanded20] = useState(false);
    
    const handleExpandClick17 = () => {
        setExpanded17(!expanded17);
      };
      const handleExpandClick18 = () => {
        setExpanded18(!expanded18);
      };
      const handleExpandClick19 = () => {
        setExpanded19(!expanded19);
      };
      const handleExpandClick20= () => {
        setExpanded20(!expanded20);
      };

      const loadConsulta17 =async()=>{
  
        const response = await fetch('http://localhost:4000/consulta1_segmento')
        const data = await response.json()
        console.log(data)
        SetConsulta17(data.Consulta1_Segmentos)
      }
      const loadConsulta18 =async()=>{
        
        const response = await fetch('http://localhost:4000/consulta2_segmento')
        const data = await response.json()
        console.log(data)
        SetConsulta18(data.Consulta2_Segmentos)
      }
      const loadConsulta19 =async()=>{
        
        const response = await fetch('http://localhost:4000/consulta3_segmento')
        const data = await response.json()
        console.log(data)
        SetConsulta19(data.Consulta3_Segmentos)
      }
      const loadConsulta20 =async()=>{
        
        const response = await fetch('http://localhost:4000/consulta4_segmento')
        const data = await response.json()
        console.log(data)
        SetConsulta20(data.Consulta4_Segmentos)
      }
     
    useEffect(()=>{
        loadConsulta17()
        loadConsulta18()
        loadConsulta19()
        loadConsulta20()
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
        ><Typography variant="h5"><b> Consulta 1 entre segmentos </b></Typography>
        <Typography variant="h6">
        Ordenes con método de envio 'CARGO TRANSPORT 5' y su tarifa de envio
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded17}
          onClick={handleExpandClick17}
         
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded17} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#f3e5f5",
          }}>

        {consulta17.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
              
            <Typography><b>Sales Order ID: </b>{get.SalesOrderID}</Typography>
            <Typography><b>Fecha de Envio: </b>{get.ShipDate}</Typography>
            <Typography><b>ID de Direccion de envio: </b>{get.ShipToAddressID}</Typography>
            <Typography><b>ID del metodo de envio: </b>{get.ShipMethodID}</Typography>
            <Typography><b>Nombre:</b> {get.Name}</Typography>
            <Typography><b>Tarifa de envio: </b>{get.ShipRate}</Typography>
            <Typography><b>----------------------------------------------------------------------------</b></Typography>
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
        ><Typography variant="h5"><b> Consulta 2 entre segmentos </b></Typography>
        <Typography variant="h6">
        TOP 5 representantes de ventas con mayor numero de ordenes realizadas
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded18}
          onClick={handleExpandClick18} 
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded18} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#fce4ec",
          }}>
        {consulta18.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >          
            <Typography><b>Business Entity ID: </b>{get.BusinessEntityID}</Typography>
            <Typography><b>National ID Number: </b>{get.NationalIDNumber}</Typography>
            <Typography><b>Login ID: </b>{get.LoginID}</Typography>
            <Typography><b>Hire Date: </b>{get.HireDate}</Typography>
            <Typography><b>Sales Quota: </b>{get.SalesQuota}</Typography>
            <Typography><b>Sales Last Year: </b>{get.SalesLastYear}</Typography>
            <Typography><b>Commission Pct: </b>{get.CommissionPct}</Typography>
            <Typography><b>Sales Person ID: </b>{get.SalesPersonID}</Typography>
            <Typography><b>Ventas Totales: </b>{get.Total_Sale}</Typography>
            <Typography><b>--------------------------------------------------------------------------------------</b></Typography>
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
        ><Typography variant="h5"><b> Consulta 3 entre segmentos </b></Typography>
        <Typography variant="h6">
        TOP 5 productos diferentes mas vendidos por cantidad - Historial global
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded19}
          onClick={handleExpandClick19} 
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded19} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#e0f7fa",
          }}>
        {consulta19.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >          
            <Typography><b>Nombre: </b>{get.Name}</Typography>
            <Typography><b>Total: </b>{get.Total}</Typography>
            <Typography><b>-------------------------------------------------------------</b></Typography>
          </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>

       <Card
       style={{
        marginBottom: ".7rem",
        backgroundColor: "#f9fbe7",
      }}
    > 
        <CardContent
        style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ><Typography variant="h5"><b> Consulta 4 entre segmentos </b></Typography>
        <Typography variant="h6">
        Productos que tienes el precio de venta más caro que esté en oferta especial
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded20}
          onClick={handleExpandClick20} 
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded20} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#f1f8e9",
          }}>
        {consulta20.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >          
            <Typography><b>Id de Producto: </b>{get.ProductID}</Typography>
            <Typography><b>Nombre: </b>{get.Name}</Typography>
            <Typography><b>Precio: </b>{get.Price}</Typography>
            <Typography><b>---------------------------------------------------</b></Typography>
          </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>
    
    </TabPanel>
)
};
    
  export default Segmentos;