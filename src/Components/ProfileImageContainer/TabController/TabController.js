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
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

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
                    <Tab sx={{color: 'white'}} label="Images" {...a11yProps(0)} />
                    <Tab sx={{color: 'white'}} label="Add Images" {...a11yProps(1)} />
                    <Tab sx={{color: 'white'}} label="Saved" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                {/* pass through src/alt for profile/id:*/}
                    <ImageList />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AddImage />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ImageList />
                </TabPanel>
                </Paper>
        </>
    );
}