import React from 'react';
import { Container } from 'react-bootstrap';
import { About } from '../../components/landing';

const AboutContainer = () => {
  return (
    <Container fluid as="section" className="bg-hl-secondary about px-5 py-5">
      <About />
    </Container >
  )
}

export default AboutContainer; 
