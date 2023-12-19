import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CarouselComponent = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const prevSlide = () => {
    setIndex(index - 1 < 0 ? images.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index + 1 >= images.length ? 0 : index + 1);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {images.map((image, idx) => (
          <Carousel.Item key={idx}>
            <img className="d-block w-100" src={image} alt={`Slide ${idx}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <Button className="carousel-button" onClick={prevSlide}>
        <FaArrowLeft />
      </Button>
      <Button className="carousel-button" onClick={nextSlide}>
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default CarouselComponent;
