import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import { ProgressAddImage } from '../../Progress/ProgressAddImage';
import { Input, TextField, Typography } from '@mui/material';


export default function AddImage () {
  const [newImage, setNewImage] = React.useState();
  const [file1, setFile1] = React.useState();
  const [description, setDescription] = React.useState();
  const [newDescription, setNewDescription] = React.useState();

  const handleImageChange = (event) => {
    event.preventDefault();
    setNewDescription(description.target.value)
    setFile1(newImage[0]);
  };

  return (
      <>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle1"> Image description : </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField onChange={setDescription} style={{backgroundColor: 'secondary', color: 'white'}} color="secondary" variant="filled"> Image description : </TextField>
          </Grid>
          <Grid item xs={11} sx={{paddingBottom: 2, color: 'secondary.main' }}>
            <DropzoneArea
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                maxFileSize={5000000}
                filesLimit={1}
                accept="image/jpeg"
                onChange={setNewImage}
                style={{height: 40}}
            />
          </Grid>
          <Grid item xs={11} sx={{paddingBottom: 2}}>
            <Button onClick={handleImageChange} fullWidth component="label" color="secondary" variant="contained"> Submit
            </Button>
            {file1 && <ProgressAddImage file1={file1} setFile1={setFile1} description={newDescription} />}
          </Grid>
        </Grid>
      </>
    );
  };