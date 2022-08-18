import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const Carousel = () => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        displayIndex + 1 > itemData.length - 1
          ? setDisplayIndex((prev) => (prev = 0))
          : setDisplayIndex((prev) => prev + 1);
      }, 3500);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, displayIndex]);

  const handleForward = () => {
    displayIndex + 1 > itemData.length - 1
      ? setDisplayIndex(0)
      : setDisplayIndex((prev) => prev + 1);
  };
  const handleBackward = () => {
    displayIndex - 1 < 0
      ? setDisplayIndex(itemData.length - 1)
      : setDisplayIndex((prev) => prev - 1);
  };

  return (
    <div
      style={{
        height: '450px',
        minWidth: '50vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {itemData.map((item, index) => (
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
              height: '450px',
              position: 'relative',
              display:
                displayIndex === index
                  ? 'block'
                  : setTimeout(() => 'none', 1000),
            }}
            src={item.img}
            className={`carousel-img ${
              index === displayIndex ? 'fade-in' : 'fade-out'
            }`}
            onLoad={() => setLoaded(true)}
          />
          {loaded && displayIndex === index && (
            <div style={{ zIndex: 3 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'absolute',
                  top: '43%',
                  width: '100%',
                }}
              >
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
                    <PauseIcon fontSize="small" sx={{ color: 'white' }} />
                  ) : (
                    <PlayArrowIcon fontSize="small" sx={{ color: 'white' }} />
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

export default Carousel;

const itemData = [
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_1819%400.5x.jpg?alt=media&token=eea8f52c-0b96-4f29-9aeb-bfb8046d11d3',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_1956%400.5x.jpg?alt=media&token=8970257d-a133-4cba-8b56-03bbf6454040',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_1968%400.5x.jpg?alt=media&token=a8f854ba-733f-4394-ab2a-e8c11fcf3a75',
  },

  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_2082%400.5x.jpg?alt=media&token=f778068a-3496-44ca-a5e8-03b384442689',
  },

  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_2378%400.5x.jpg?alt=media&token=f164d79e-4286-447e-b37b-a54eb26984fd',
  },

  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_2482%400.5x.jpg?alt=media&token=4f18f68c-2bb7-4fa1-ac0c-dc3a68857ba7',
  },

  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_2513%400.5x.jpg?alt=media&token=bb0667cb-695e-43c2-b565-444abd728ef0',
  },

  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_2514%400.5x.jpg?alt=media&token=18534a09-b9f1-43fd-b787-270df707be02',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_2515%400.5x.jpg?alt=media&token=84bcd196-242e-4720-b661-c9606e74fa67',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_2538%400.5x.jpg?alt=media&token=dcf1b936-06fa-40b4-97fc-bae9fc714d68',
  },
  {
    img: 'https://firebasestorage.googleapis.com/v0/b/projects-791c6.appspot.com/o/joneswood%2FIMG_2549%400.5x.jpg?alt=media&token=235a4326-830e-4bc4-8bb5-cec227063f5e',
  },
];