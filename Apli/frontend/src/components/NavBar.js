import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import Consultas from "./Consultas";
import PropTypes from 'prop-types';
import Segmentos from './Segmentos';
import Grafo  from '../avatar/grafo.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Osiris from '../avatar/osiris.jpg';
import  Sayuri from '../avatar/say.jpg';
import Joshep from "../avatar/joshep.jpg";
import Daniel from '../avatar/daniel.jpg';
import Yuval from '../avatar/Yuval1.jpg'
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



export default function NavBar() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
            <AppBar position="static" color="transparent">
    <Typography variant="h3" component="div">
                Fragmentacion
            </Typography>
            <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab  label="Integrantes" />
          <Tab  label="Consultas" />
          <Tab  label="Consultas entre segmentos" />
          <Tab  label="Grafo" />
        </Tabs>
      </Box>
      </AppBar>
      <TabPanel value={value} index={0}>
      <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={Joshep} sx={{ width: 100, height: 100 }} />
        </ListItemAvatar>
        <Typography variant="h5">
          Camacho Domingez Irvin
        </Typography>
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={Daniel} sx={{ width: 100, height: 100 }} />
        </ListItemAvatar>
        <Typography variant="h5">
          Gonzalez Jimenez Daniel
        </Typography>
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={Yuval} sx={{ width: 100, height: 100 }}/>
        </ListItemAvatar>
        <Typography variant="h5">
          Noe Zuriel Yuval 
        </Typography>
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={Osiris}sx={{ width: 100, height: 100 }} />
        </ListItemAvatar>
        <Typography variant="h5">
         Orduña  Ramirez Osiris
        </Typography>
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar src={Sayuri}  sx={{ width: 100, height: 100 }}/>
        </ListItemAvatar>
        <Typography variant="h5">
          Panama Segura Sayuri
        </Typography>
      </ListItem>
      </List>

      </TabPanel>
     <Consultas value={value} index={1}/>
     <Segmentos value={value} index={2}/>
      <TabPanel value={value} index={3}>
        <img src={Grafo}/>
      </TabPanel>
             </div>
       
    )
}
