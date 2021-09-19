import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    toolbarButtons: {
        marginLeft: 'auto'
    },
})

export default function ButtonAppBar() {
    const classes = useStyles();
  return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    >
                    <ApartmentIcon />
                        </IconButton>
                    <Typography variant="h6" component="div">
                        Lorem Ipsum
                    </Typography>
                    <div className={classes.toolbarButtons}>
                        <Button variant="text" color="inherit">Login</Button>
                        <Button variant="outlined" color="inherit">Sign Up</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
  );
}
