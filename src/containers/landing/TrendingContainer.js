import React, { useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
import { TrendingCard } from '../../components/card/TrendingCard';
// import './TrendingContainer.css';

const TrendingContainer = () => {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Row activeIndex={index} onSelect={handleSelect} className='mr-2 ml-2 mt-5 mb-5'>
        
        <Carousel className='d-flex justify-content-center align-items-center'>
          <Carousel.Item>
            <TrendingCard/>
          </Carousel.Item>
          <Carousel.Item>
            <TrendingCard/>
          </Carousel.Item>
          <Carousel.Item>
            <TrendingCard/>
          </Carousel.Item>
          <Carousel.Item>
            <TrendingCard/>
          </Carousel.Item>
          <Carousel.Item>
            <TrendingCard/>
          </Carousel.Item>
          <Carousel.Item>
            <TrendingCard/>
          </Carousel.Item>
        </Carousel>
      </Row> 
    </>
  );
}

export default TrendingContainer;