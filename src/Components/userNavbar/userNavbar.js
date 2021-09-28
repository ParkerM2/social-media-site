import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import ApartmentIcon from '@mui/icons-material/Apartment';
import {makeStyles} from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import userPhoto from '../../images/doggo.JPG';
import { useAuth } from '../../context/AuthContext';
import {Link} from 'react-router-dom';
import { MenuItem, MenuList } from '@mui/material';

const useStyles = makeStyles({
    toolbarButtons: {
        marginLeft: 'auto',
        bgcolor: 'primary.light'
    },
})

export default function ButtonAppBar() {
    const {currentUser} = useAuth();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        console.log('click')
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    
      setAnchorEl(null);
    };
    
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

                    <div className={classes.toolbarButtons}>
                        <Link style={{textDecoration: 'none'}}  to={{
                                pathname: `/home`
                            }}>
                        <Typography variant="h6" sx={{color: 'secondary.main'}}>Dashboard </Typography>
                        </Link>
                    </div>
                    
                    <div className={classes.toolbarButtons}>
                        <IconButton onClick={handleClick} aria-controls="menu" aria-haspopip="true" aria-expanded={open ? 'true' : undefined}>
                            <Avatar sx={{ width: 30, height: 30, bgcolor: 'secondary.dark', color: 'black'}} src={currentUser.photoURL} />
                        </IconButton>
                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                <MenuList >
                                <MenuItem onClick={handleClose}> Profile </MenuItem>
                                <MenuItem onClick={handleClose}> Account </MenuItem>
                                <MenuItem onClick={handleClose}> Logout </MenuItem>
                                </MenuList>
                            </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
  );
}

//                         <Link to={{
    // pathname: `/profile/${currentUser.uid}`
// }}>
