import React, { useEffect } from 'react';
import '../css/ImageList.css';
import unsplash from '../api/unsplash';
import { useStateValue } from '../context/StateProvider';
import ImageCard from './ImageCard';

const Images = ({ id }) => {
  const [{ photos }, dispatch] = useStateValue();
  const fetchImages = async () => {
    const res = await unsplash.get(`/collections/${id}/photos`);
    dispatch({ type: 'ADD_IMAGES', payload: res.data });
  };
  useEffect(() => {
    fetchImages();
  }, [id]);

  console.log(photos);

  const images = photos.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default Images;
