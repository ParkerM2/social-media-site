import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Typography } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});

export default function UploadImageButton() {
  return (
        <>
        <label htmlFor="icon-button-file">
            <Typography sx={{paddingLeft: 2}}> Upload a profile pic </Typography>
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton color="secondary" aria-label="upload picture" component="span">
                <PhotoCamera />
            </IconButton>
        </label>
        </>
  );
}