import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {makeStyles} from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import userPhoto from '../../images/doggo.JPG';

import { useAuth } from '../../context/AuthContext';

const useStyles = makeStyles({
    toolbarButtons: {
        marginLeft: 'auto'
    },
})

export default function ButtonAppBar() {
    const classes = useStyles();
    // const { currentUser } = useAuth();
    // currentUser will contain user obj from firestore
    // currentUser.userPhoto will contain image for navbar

  return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                        href="/"
                    >
                        <ApartmentIcon />
                    </IconButton>

                    <Typography variant="h6" component="div">
                        Things
                    </Typography>

                    <div className={classes.toolbarButtons}>
                        <IconButton>
                            <Avatar sx={{ width: 44, height: 44, bgcolor: 'secondary.dark', color: 'black'}} src={userPhoto} />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
  );
}
