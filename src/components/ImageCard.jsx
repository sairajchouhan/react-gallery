import React, { useRef, useState, useEffect } from 'react';

const ImageCard = ({ image }) => {
  const imgRef = useRef();
  const [spans, setSpans] = useState(0);

  const knowHowManySpans = () => {
    const height = imgRef?.current?.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    setSpans(spans);
  };

  useEffect(() => {
    imgRef.current.addEventListener('load', knowHowManySpans);
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imgRef} src={image.urls.regular} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
