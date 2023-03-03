import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Imagenes.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Imagenes= ({ images }) => {
  return (
    <Carousel
    prevIcon={<FaChevronLeft style={{ color: 'black' }} />}
    nextIcon={<FaChevronRight style={{ color: 'black' }} />}
    >
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="Carousel"
            src={image}
            alt={`Slide ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Imagenes
