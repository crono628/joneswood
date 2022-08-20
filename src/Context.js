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
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    };
    console.log('loaded');

    return getImages;
  }, []);

  const value = {
    images,
    loading,
  };

  return <ImgContext.Provider value={value}>{children}</ImgContext.Provider>;
};
