import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid } from '@mui/material';

// will pass through img titles and alts from currentUser

export default function MasonryImageList( { data } ) {
  return (
    <>
    <Grid sx={{ maxWidth: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        
        {data.photos.map((item) => (
          <ImageListItem key={item.url}>
            <img
              key={item.url}
              src={item.url}
              srcSet={item.url}
              alt={item.alt}
              loading="lazy"
            />
          </ImageListItem>
        ))}

      </ImageList>
      </Grid>
      </>
  );
};

