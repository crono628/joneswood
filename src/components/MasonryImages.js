import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { getDownloadURL, listAll } from 'firebase/storage';
import { compressedRef } from '../firebase';

const MasonryImages = () => {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      try {
        const imageUrls = await listAll(compressedRef);
        imageUrls.items.forEach(async (item) => {
          const url = await getDownloadURL(item);
          setImages((prev) => [...prev, url]);
          setLoaded(true);
        });
      } catch (error) {
        console.log(error);
      }
    };

    return () => getImages();
  }, []);
  return (
    <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images?.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MasonryImages;
