import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  //Rotate the carousel
  useEffect(() => {
    const rotateTimeInMs = 3000;
    const interval = setInterval(() => {
      nextSlide();
    }, rotateTimeInMs);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="relative mb-12" style={{ height: "70vh" }}>
      <div className="overflow-hidden h-full ">
        <div className="flex h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full ${
                index === currentIndex ? "block" : "hidden"
              } transition-opacity duration-500 ease-in-out`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-8 h-2 mx-2 bg-white rounded-full ${
              index === currentIndex ? "bg-orange-400" : "bg-white"
            }`}
            s
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 px-4 py-2 text-white 
      text-center rounded-full hover:outline"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="w-10 h-10 " />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 text-white
      text-center rounded-full hover:outline"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="w-10 h-10" />
      </button>
    </div>
  );
};

export default Carousel;
