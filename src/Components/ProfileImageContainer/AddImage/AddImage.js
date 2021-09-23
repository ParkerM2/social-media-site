import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function AddImage () {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [imageUrl, setImageUrl] = React.useState(null);
  
    React.useEffect(() => {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
      }
    }, [selectedImage]);
  
    return (
      <>
        <input
          accept="image/*"
          type="file"
          id="select-image"
          style={{ display: 'none' }}
          onChange={e => setSelectedImage(e.target.files[0])}
        />
        <label htmlFor="select-image">
          <Button variant="contained" color="secondary" component="span">
            Upload Image
          </Button>
        </label>
        {imageUrl && selectedImage && (
            <>
            <Box mt={2} textAlign="center">
                <div>Preview:</div>
                <img src={imageUrl} alt={selectedImage.name} height="150px"/>
            </Box>
            <Button variant="outlined" color="secondary">Submit</Button>
            </>
        )}
      </>
    );
  };