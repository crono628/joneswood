import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { useImgContext } from '../Context';
import ImgModal from './ImgModal';

const MasonryImages = () => {
  const { images } = useImgContext();
  const [src, setSrc] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSrc(null);
  };

  const modalControls = {
    src,
    open,
    handleOpen,
    handleClose,
  };

  const handleClick = (e) => {
    setSrc(images[e.target.dataset.index]);
    handleOpen();
  };

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
                onClick={handleClick}
                style={{ zIndex: '1' }}
                data-index={index}
                src={`${item}?w=248&fit=crop&auto=format`}
                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <div className="sm-click">Touch to expand images</div>
      <div className="lg-click">Click to expand images</div>
      <ImgModal value={modalControls} />
    </div>
  );
};

export default MasonryImages;
