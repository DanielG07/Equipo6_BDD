import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Typography from '@mui/material/Typography';
import Consultas from "./Consultas";
import PropTypes from 'prop-types';
import Segmentos from './Segmentos';
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
   list
      </TabPanel>
     <Consultas value={value} index={1}/>
     <Segmentos value={value} index={2}/>
      <TabPanel value={value} index={3}>
        
      </TabPanel>
             </div>
       
    )
}
