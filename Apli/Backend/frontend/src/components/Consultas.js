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
import { typography } from '@mui/system';
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
    const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    const loadConsulta1 =async()=>{

        const response = await fetch('http://localhost:4000/consulta1')
        const data = await response.json()
        console.log(data)
        SetConsulta1(data.Consulta1)
    }
    useEffect(()=>{
    loadConsulta1()
    },[])
return(
    <TabPanel value={props.value} index={props.index}>

  
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
        ><Typography variant="h5"> Consulta1 </Typography>
        <Typography variant="h6">
        Ventas por territorio
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
    <ExpandMoreIcon />
        </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
         style={{
            flexDirection: 'row-reverse',
           backgroundColor:"#ffebee",
          }}>

       
        {consulta1.map((get)=>(
          <div
            style={{
              color: "black",
            }}
          >
              
            <Typography>{get.Territorio}</Typography>
            <Typography>{get.Ventas}</Typography>

          </div>


   ))}
   </CardContent>
      </Collapse>
       </Card>
    </TabPanel>
)
};
    
  export default Consultas;