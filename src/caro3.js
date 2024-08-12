import React, { useEffect, useState } from 'react';
import './caro3.css';

const Carousel22 = () => {
  const images = ['image-0l', 'image-1l', 'image-2l'];
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
    <div className="carousell">
      <button onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)} className="carousel-buttonf">
        &lt;
      </button>
      <div className={`carousel-imagel ${images[currentIndex]}`}></div>
      <button onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} className="carousel-buttonl">
        &gt;
      </button>
    </div>
  );
};

export default Carousel22;
