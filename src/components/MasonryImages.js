import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getDownloadURL, listAll } from 'firebase/storage';
import { compressedRef } from '../firebase';
import { useImgContext } from '../Context';

const MasonryImages = () => {
  const { images, loading } = useImgContext();

  return (
    <div className="masonry-width-container">
      <Box
        className="masonry-width"
        sx={{ overflowY: 'scroll', scrollbarWidth: 'none' }}
      >
        <ImageList variant="masonry" cols={3} gap={8}>
          {images.map((item, index) => (
            <ImageListItem key={item + index}>
              <img
                src={`${item}?w=248&fit=crop&auto=format`}
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
};

export default MasonryImages;
