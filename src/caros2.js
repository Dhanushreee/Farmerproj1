import React, { useEffect, useState } from 'react';
import './caro2.css';

const Carousel11 = () => {
  const images = ['image-0f', 'image-1f', 'image-2f'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayInterval = 3000; // Auto-play interval in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [currentIndex, images.length]);

  return (
    <div className="carouself">
      <button onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)} className="carousel-buttonf">
        &lt;
      </button>
      <div className={`carousel-imagef ${images[currentIndex]}`}></div>
      <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} className="carousel-buttonf">
        &gt;
      </button>
    </div>
  );
};

export default Carousel11;
