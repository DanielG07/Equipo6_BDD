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
    const [consulta7,SetConsulta7]= useState([]);
    const [consulta6,SetConsulta6]= useState([]);
    const [consulta8,SetConsulta8]= useState([]);
    const [consulta9,SetConsulta9]= useState([]);
    const [consulta10,SetConsulta10]= useState([]);
    const [consulta11,SetConsulta11]= useState([]);
    const [consulta12,SetConsulta12]= useState([]);
    const [consulta13,SetConsulta13]= useState([]);
    const [consulta14,SetConsulta14]= useState([]);
    const [consulta15,SetConsulta15]= useState([]);
    const [consulta16,SetConsulta16]= useState([]);
    const [consulta17,SetConsulta17]= useState([]);
    const [consulta18,SetConsulta18]= useState([]);
    const [consulta19,SetConsulta19]= useState([]);
    const [consulta20,SetConsulta20]= useState([]);
    const [expanded, setExpanded] = useState(false);
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
    const [expanded17, setExpanded17] = useState(false);
    const [expanded18, setExpanded18] = useState(false);
    const [expanded19, setExpanded19] = useState(false);
    const [expanded20, setExpanded20] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const handleExpandClick4 = () => {
    setExpanded4(!expanded4);
  };
  const handleExpandClick6 = () => {
    setExpanded6(!expanded6);
  };
  const handleExpandClick8 = () => {
    setExpanded8(!expanded8);
  };
    const loadConsulta1 =async()=>{

        const response = await fetch('http://localhost:4000/consulta1')
        const data = await response.json()
        console.log(data)
        SetConsulta1(data.Consulta1)
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
    const loadConsulta6 =async()=>{
  
      const response = await fetch('http://localhost:4000/consulta6')
      const data = await response.json()
      console.log(data)
      SetConsulta6(data.Consulta6)
  }
  const loadConsulta8 =async()=>{
  
    const response = await fetch('http://localhost:4000/consulta8')
    const data = await response.json()
    console.log(data)
    SetConsulta8(data.Consulta8)
}
    useEffect(()=>{
    loadConsulta1()
    loadConsulta3()
    loadConsulta4()
    loadConsulta6()
    loadConsulta8 ()
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
          expand={expanded}
          onClick={handleExpandClick}
         
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
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
        ><Typography variant="h5"> Consulta3 </Typography>
        <Typography variant="h6">
        Ventas por tienda 
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
           backgroundColor:"#ffebee",
          }}>

       
        {consulta3.map((consulta)=>(
          <div
            style={{
              color: "black",
            }}
          >
              
            <Typography>Territorio{consulta.Territorio}</Typography>
            <Typography>Total de clientes:{consulta.TotalClientes}</Typography>
           
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
        ><Typography variant="h5"> Consulta4 </Typography>
        <Typography variant="h6">
        Ordenes realizadas debidas a anuncio de revista
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
              
            <Typography>Orden:{get.Orden}</Typography>
            <Typography>Razon:{get.Razon}</Typography>
            <Typography>Territorio{get.Territorio}</Typography>
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
        ><Typography variant="h5"> Consulta6 </Typography>
        <Typography variant="h6">
        Ordenes hechas por cada representante de ventas
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick6}
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded6} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#e3f2fd",
          }}>

       
        {consulta6.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
              
            <Typography>Representantes de Ventas:{get.RepresentanteVentas}</Typography>
            <Typography>Ordenes:{get.Ordenes}</Typography>
            
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
        ><Typography variant="h5"> Consulta8 </Typography>
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
           backgroundColor:"#fffde7",
          }}>

       
        {consulta8.map((consulta)=>(
          <div
            style={{
              color: "black",
            }}
          >
              
            <Typography>Territorio:{consulta.Territorio}</Typography>
            <Typography>Representante de ventas:{consulta.RepresentantVentas}</Typography>
            <Typography>Total de ventas:{consulta.TotaVentas}</Typography>
          </div>
   ))}
   </CardContent>
      </Collapse>
       </Card>
    </TabPanel>
)
};
    
  export default Consultas;