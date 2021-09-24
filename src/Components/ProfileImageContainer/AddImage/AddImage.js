import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ProgressUpdateUserProfileImage } from '../../Progress/ProgressUserPhoto';


export default function AddImage () {
    const [selectedImage, setSelectedImage] = React.useState(null);
    const [imageUrl, setImageUrl] = React.useState(null);
    const [newImage, setNewImage] = React.useState();
  
    React.useEffect(() => {
      if (selectedImage) {
        setImageUrl(URL.createObjectURL(selectedImage));
        console.log(selectedImage)
      }
    }, [selectedImage]);

    const handleSubmit = () => {

      console.log(newImage)
    }
  
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
                <Button variant="contained" onSubmit={handleSubmit} color="secondary">Submit</Button>
                {/* div for progress hook here? also need to call useStorage hook */}
                
            </Box>
            </>
        )}
      </>
    );
  };