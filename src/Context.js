import { CircularProgress } from '@mui/material';
import { getDownloadURL, listAll } from 'firebase/storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { compressedRef } from './firebase';

const ImgContext = createContext();

export const useImgContext = () => {
  return useContext(ImgContext);
};

export const ImgContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const imageUrls = await listAll(compressedRef);
        let mappedUrls = imageUrls.items.map((item) => getDownloadURL(item));
        Promise.all(mappedUrls).then((imgSrcArr) => {
          setImages(imgSrcArr);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        });
      } catch (error) {
        console.log(error);
      }
    };
    console.log('loaded');

    getImages();
  }, []);

  const value = {
    images,
    loading,
  };

  return (
    <ImgContext.Provider value={value}>
      {loading ? (
        <div className="div-style">
          <CircularProgress />
        </div>
      ) : (
        !loading && children
      )}
    </ImgContext.Provider>
  );
};
