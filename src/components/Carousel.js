import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { compressedRef, storage } from '../firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

const Carousel = () => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [images, setImages] = useState([]);
  const [isActive, setIsActive] = useState(true);
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

  useEffect(() => {
    let interval;
    if (isActive && loaded) {
      interval = setInterval(() => {
        displayIndex + 1 > images.length - 1
          ? setDisplayIndex((prev) => (prev = 0))
          : setDisplayIndex((prev) => prev + 1);
      }, 3500);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, displayIndex, images]);

  const handleForward = () => {
    displayIndex + 1 > images.length - 1
      ? setDisplayIndex(0)
      : setDisplayIndex((prev) => prev + 1);
  };
  const handleBackward = () => {
    displayIndex - 1 < 0
      ? setDisplayIndex(images.length - 1)
      : setDisplayIndex((prev) => prev - 1);
  };

  return (
    <div style={divStyle}>
      {loaded &&
        images.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
            }}
          >
            <img
              id={index}
              style={{
                maxHeight: '550px',
                position: 'relative',
                display:
                  displayIndex === index
                    ? 'block'
                    : setTimeout(() => 'none', 1000),
              }}
              // onLoad={() => setLoaded(true)}
              src={item}
              className={`carousel-img ${
                index === displayIndex ? 'fade-in' : 'fade-out'
              }`}
            />
            {loaded && displayIndex === index && (
              <div style={{ zIndex: 3 }}>
                <div style={arrowStyle}>
                  <IconButton onClick={handleBackward}>
                    <NavigateBeforeIcon
                      fontSize="large"
                      sx={{ color: 'white' }}
                    />
                  </IconButton>
                  <IconButton onClick={handleForward} sx={{ color: 'white' }}>
                    <NavigateNextIcon fontSize="large" />
                  </IconButton>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <IconButton onClick={() => setIsActive((prev) => !prev)}>
                    {isActive ? (
                      <PauseIcon fontSize="small" sx={{ color: '#adc3c6' }} />
                    ) : (
                      <PlayArrowIcon
                        fontSize="small"
                        sx={{ color: '#adc3c6' }}
                      />
                    )}
                  </IconButton>
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

const divStyle = {
  height: '500px',
  minWidth: '50vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '100px',
};

const arrowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  top: '43%',
  width: '100%',
};

export default Carousel;
