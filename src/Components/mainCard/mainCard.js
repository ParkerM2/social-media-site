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
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

  


export default function MainCard(props) {

    const {username, userPhoto, displayedImage, description, photoLocation} = props;
  return (
      <>
        <Grid sx={{padding: 1}} justifyContent="center" container spacing={1}>
            <Grid item>
                <Paper
                    sx={{
                        backgroundColor: 'primary.main',
                        height: 575,
                        maxWidth: 375,
                    }}
                    elevation={16}
                    variant="outlined" 
                    >

                    <Grid container sx={{padding: '2px'}} flexDirection='row' justifyContent="space-between">
                        <Grid item sx={{padding: '2px'}}>
                            <Avatar sx={{ width: 44, height: 44, bgcolor: 'secondary.dark', color: 'black'}} src={userPhoto} />
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
                                <MoreVertIcon fontSize="large" color="secondary" />
                            </IconButton>
                        </Grid>
                    </Grid>

                    

                    <Divider  color="primary.dark" variant="middle"/>
                    
                    <Grid sx={{paddingTop: '4px', paddingBottom: '4px'}} container justifyContent="center">
                        <Grid item>
                            <CardMedia
                            sx={{
                                width: 'auto',
                                maxHeight: '400px',
                            }}
                                component="img"
                                image={displayedImage}
                                title="rocks"
                            />                           
                        </Grid>
                    </Grid>
                    <Divider variant="middle" color="primary.dark" />
                        <CardContent sx={{paddingTop: .5, overflowY: 'scroll', height: '80px'}}>
                            <Typography variant="caption" color="secondary.main"> <b>{username} : </b>{' '} {description}</Typography>
                        </CardContent>
                </Paper>

            </Grid> 
        </Grid>
    </>
  );
}