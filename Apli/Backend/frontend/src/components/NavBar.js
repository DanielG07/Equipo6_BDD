import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppBar from "@mui/material/AppBar";
import Consultas from "./Consultas";
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DnsIcon from '@mui/icons-material/Dns';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import InsertChartIcon from '@mui/icons-material/InsertChart';

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


export default function BasicTabs() {
    
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <div >
    <AppBar position="static" color="transparent">
    <Typography variant="h3" component="div">
                Fragmentacion
            </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
       
        <Tabs value={value}
         onChange={handleChange} 
         textColor="secondary"
         indicatorColor="secondary"
         aria-label="basic tabs example">
          <Tab  icon={<PeopleAltTwoToneIcon/>} label="Integrantes"  {...a11yProps(0)} />
          <Tab icon={<DnsIcon/>} label="Consultas" {...a11yProps(1)} />
          <Tab icon={<InsertChartIcon/>} label="Grafo" {...a11yProps(2)} />
        </Tabs>
      </Box>
      </AppBar>
      <TabPanel value={value} index={0}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sayuri" src="/Sayuri.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sayuri Panama Segura"
        />
      </ListItem>
      </List>
      </TabPanel>
     <Consultas value={value} index={1}/>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    
    </div>
  );
}