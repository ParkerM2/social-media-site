import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// will pass through img titles and alts from currentUser

export default function MasonryImageList( { data } ) {
  return (
    <Box sx={{ maxWidth: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {data.photos.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.url}
              srcSet={item.url}
              alt={item.alt}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

