import * as React from 'react';
import {
    Grid,
    Paper,
    Divider,
    Avatar,
    Typography,
    CardMedia,
    IconButton,
    CardContent,
    Menu,
    MenuItem,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

  


export default function MainCard(props) {
    const {username, userPhoto, displayedImage, description, photoLocation, uid} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    
      setAnchorEl(null);
    };
    
    return (
        <>
            <Grid sx={{ padding: 1 }} justifyContent="center" container spacing={1}>
                <Grid item>
                    <Paper
                        sx={{
                            backgroundColor: 'primary.main',
                            height: 575,
                            maxWidth: 350,
                            minWidth: 350
                        }}
                        variant="outlined"
                    >

                        <Grid container sx={{ padding: '2px' }} flexDirection='row' justifyContent="space-between">
                            <Grid item sx={{ padding: '2px' }}>
                                <IconButton href={`/profile/${uid}`}>
                                    <Avatar sx={{ width: 40, height: 40, bgcolor: 'secondary.dark', color: 'black' }} src={userPhoto} />
                                </IconButton>
                            </Grid>

                            <Grid item flexDirection="column" align="left">
                                <Typography variant="h6" color="secondary.dark">
                                    {username}
                                </Typography>
                                <Typography variant="caption" color="secondary.dark">
                                    {photoLocation}
                                </Typography>
                            </Grid>

                            <Grid item>
                                <IconButton>
                                    <MoreVertIcon onClick={handleClick} fontSize="large" color="secondary" />
                                </IconButton>

                                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                    <MenuItem onClick={handleClose}> Report </MenuItem>
                                    <MenuItem onClick={handleClose}> Save to Archive </MenuItem>
                                </Menu>

                            </Grid>
                        </Grid>

                    

                        <Divider color="primary.dark" variant="middle" />
                    
                        <Grid sx={{ paddingTop: '4px', paddingBottom: '4px' }} container justifyContent="center">
                            <Grid item>
                                <CardMedia
                                    sx={{
                                        width: 300,
                                        height: 400,
                                    }}
                                    component="img"
                                    image={displayedImage}
                                    title="rocks"
                                />
                            </Grid>
                        </Grid>
                        <Divider variant="middle" color="primary.dark" />
                        <CardContent sx={{ paddingTop: .5, overflowY: 'scroll', height: '80px' }}>
                            <Typography variant="caption" color="secondary.main"> <b>{username} : </b>{' '} {description}</Typography>
                        </CardContent>
                    </Paper>

                </Grid>
            </Grid>
        </>
    );
};