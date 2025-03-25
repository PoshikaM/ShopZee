import { useState, useEffect } from "react";

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(autoSlide);
  }, [currentIndex, interval]);

  return (
    <div className="relative w-full h-96 overflow-hidden mt-10 mb-5">
      <div className="w-full h-full transition-transform duration-500 ease-in-out transform">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className="w-full h-90 object-cover"
        />
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full text-white text-xl"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full text-white text-xl"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;