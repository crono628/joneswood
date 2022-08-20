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

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div className="carousel-container">
        <IconButton onClick={handleBackward}>
          <NavigateBeforeIcon />
        </IconButton>
        {!loading &&
          images.map((image, index) => {
            if (index === displayIndex) {
              return (
                <img
                  className="carousel-img"
                  src={image}
                  alt="carousel"
                  key={index}
                />
              );
            }
          })}
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

  // return (
  //   <div style={divStyle}>
  //     {!loading &&
  //       images.map((item, index) => (
  //         <div
  //           key={index}
  //           style={{
  //             display: 'flex',
  //             flexDirection: 'column',
  //             position: 'absolute',
  //           }}
  //         >
  //           <img
  //             id={index}
  //             style={{
  //               display:
  //                 displayIndex === index
  //                   ? 'block'
  //                   : setTimeout(() => 'none', 1000),
  //             }}
  //             src={item}
  //             className={`carousel-img ${
  //               index === displayIndex ? 'fade-in' : 'fade-out'
  //             }`}
  //           />
  //           {!loading && displayIndex === index && (
  //             <div style={{ zIndex: 3 }}>
  //               <div style={arrowStyle}>
  //                 <IconButton onClick={handleBackward}>
  //                   <NavigateBeforeIcon
  //                     fontSize="large"
  //                     sx={{ color: 'white' }}
  //                   />
  //                 </IconButton>
  //                 <IconButton onClick={handleForward} sx={{ color: 'white' }}>
  //                   <NavigateNextIcon fontSize="large" />
  //                 </IconButton>
  //               </div>
  //               <div style={{ display: 'flex', justifyContent: 'center' }}>
  //                 <IconButton onClick={() => setIsActive((prev) => !prev)}>
  //                   {isActive ? (
  //                     <PauseIcon fontSize="small" sx={{ color: '#adc3c6' }} />
  //                   ) : (
  //                     <PlayArrowIcon
  //                       fontSize="small"
  //                       sx={{ color: '#adc3c6' }}
  //                     />
  //                   )}
  //                 </IconButton>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       ))}
  //   </div>
  // );
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
