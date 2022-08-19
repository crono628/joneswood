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
        let mappedUrls = imageUrls.items.map((item) => getDownloadURL(item));
        Promise.all(mappedUrls).then((thing) => {
          setImages(thing);
          setLoaded(true);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getImages();
  }, []);

  return (
    <div className="masonry-width-container">
      <Box className="masonry-width" sx={{ overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {images?.map((item, index) => (
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
