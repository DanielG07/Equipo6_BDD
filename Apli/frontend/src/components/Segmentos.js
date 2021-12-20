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
        ><Typography variant="h5"> Consulta1 de segmentos </Typography>
        <Typography variant="h6">
        Ventas por territorio
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
              
            <Typography>Territorio:{get.SalesOrderID}</Typography>
            <Typography>Fecha:{get.ShipDate}</Typography>
            <Typography>Fecha:{get.ShipToAddressID}</Typography>
            <Typography>Fecha:{get.ShipMethodID}</Typography>
            <Typography>Fecha:{get.Name}</Typography>
            <Typography>Fecha:{get.ShipRate}</Typography>
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
        ><Typography variant="h5"> Consulta2 de segmentos </Typography>
        <Typography variant="h6">
        Ventas por tienda
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
            <Typography>Territorio:{get.BusinessEntityID}</Typography>
            <Typography>Ventas:{get.NationalIDNumber}</Typography>
            <Typography>Territorio:{get.LoginID}</Typography>
            <Typography>Ventas:{get.HireDate}</Typography>
            <Typography>Territorio:{get.SalesQuota}</Typography>
            <Typography>Ventas:{get.SalesLastYear}</Typography>
            <Typography>Territorio:{get.CommissionPct}</Typography>
            <Typography>Ventas:{get.SalesPersonID}</Typography>
            <Typography>Ventas:{get.Total_Sale}</Typography>
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
        ><Typography variant="h5"> Consulta3 de segmentos </Typography>
        <Typography variant="h6">
        Ventas por tienda
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
            <Typography>Nombre: {get.Name}</Typography>
            <Typography>Total: {get.Total}</Typography>
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
        ><Typography variant="h5"> Consulta 4 de segmentos </Typography>
        <Typography variant="h6">
        Ventas por tienda
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
            <Typography>Id de Producto {get.ProductID}</Typography>
            <Typography>Nombre: {get.Name}</Typography>
            <Typography>Precio: {get.Price}</Typography>
          </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>
    
    </TabPanel>
)
};
    
  export default Segmentos;