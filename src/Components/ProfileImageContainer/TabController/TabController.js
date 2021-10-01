import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageList from '../ImageList/ImageList';
import AddImage from '../AddImage/AddImage';
import { useAuth } from '../../../context/AuthContext';

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
          <Typography sx={{color: 'white'}}>{children}</Typography>
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

// pass through currentUser images, saved images to tabs
export default function BasicTabs( { userData } ) {
  // userData contains whole user obj here ^
  const [value, setValue] = React.useState(0);
  const { currentUser } = useAuth();
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <> 
        <Paper sx={{bgcolor: 'primary.main'}}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          
            <Tabs
              textColor="secondary" 
              indicatorColor="secondary" 
              value={value} onChange={handleChange} 
              centered
              >
              <Tab sx={{ color: 'white' }} label="Images" {...a11yProps(0)} />
               {currentUser.uid === userData.uid ?
                <Tab sx={{ color: 'white' }} label="Add Images" {...a11yProps(1)} />
                :
                null}
            </Tabs>
          </Box>
        
          <TabPanel value={value} index={0}>
              <ImageList data={userData} />
          </TabPanel>
          {currentUser.uid === userData.uid ?
            <TabPanel value={value} index={1}>
              <AddImage />
            </TabPanel>
        :
          null}
          </Paper>
        </>
    );
}