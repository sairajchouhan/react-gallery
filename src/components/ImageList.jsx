import React, { useEffect } from 'react';
import '../css/ImageList.css';
import unsplash from '../api/unsplash';
import { useStateValue } from '../context/StateProvider';
import ImageCard from './ImageCard';

const Images = ({ id }) => {
  const [{ photos }, dispatch] = useStateValue();
  const fetchImages = async (pageNo) => {
    const res = await unsplash.get(`/collections/${id}/photos`, {
      params: { page: pageNo },
    });
    dispatch({ type: 'ADD_IMAGES', payload: res.data });
  };
  useEffect(() => {
    fetchImages();
  }, [id]);

  const images = photos.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default Images;
