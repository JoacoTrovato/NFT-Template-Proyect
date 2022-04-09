import React from 'react';
import { Container } from 'react-bootstrap';
import { Roadmap } from '../../components/landing';

const RoadmapContainer = () => {
  return (
    <Container fluid as="section" className="bg-hl-secondary roadmap px-5 py-5" id="roadmap-section">
      <Roadmap />
    </Container >
  )
}

export default RoadmapContainer; 
