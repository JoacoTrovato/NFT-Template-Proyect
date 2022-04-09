import React from 'react';
import { Container } from 'react-bootstrap';


const OverlayContainer = ({ children, circles }) => {
  return <>
    <Container fluid className="hl-overlay-container">
        {circles && circles.map((circle, i) => (<div key={i} className={`bg-hl-cta circle ${circle.class}`}  style={circle.style} ></div>) ) }
        <Container className="hl-overlay" fluid></Container>
        <Container className="hl-overlay-body">{ children }</Container>
    </Container>
  </>
}
export default OverlayContainer;
