import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { useImgContext } from '../Context';

const Carousel = () => {
  const { images, loading } = useImgContext();
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive && !loading) {
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

  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div>
      <div style={divStyle}>
        <IconButton onClick={handleBackward}>
          <NavigateBeforeIcon />
        </IconButton>
        <div className="carousel-container">
          {!loading &&
            images.map((image, index) => {
              return (
                <img
                  className={`carousel-img ${
                    index === displayIndex ? 'fade-in' : 'fade-out'
                  }`}
                  src={image}
                  key={index}
                  style={{
                    display:
                      displayIndex === index
                        ? 'block'
                        : setTimeout(() => 'none', 750),
                  }}
                />
              );
            })}
        </div>
        <IconButton onClick={handleForward}>
          <NavigateNextIcon />
        </IconButton>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton onClick={() => setIsActive(!isActive)}>
          {isActive ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
      </div>
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
