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
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
    toolbarButtons: {
        marginLeft: 'auto'
    },
})

export default function ButtonAppBar() {
    const {currentUser} = useAuth()
    const classes = useStyles();

    
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
                        <Link to={{
                            pathname: `/profile/${currentUser.uid}`
                        }}>
                        <IconButton>
                            <Avatar sx={{ width: 44, height: 44, bgcolor: 'secondary.dark', color: 'black'}} src={currentUser.photoURL} />
                        </IconButton>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
  );
}
