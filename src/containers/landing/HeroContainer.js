import React from 'react'; 
import { Hero } from '../../components/landing';
import { OverlayContainer } from '../../containers';
import { Row } from 'react-bootstrap';


const HeroContainer = () => {
  return (
    <section id="hero-section" className="py-5">
      <OverlayContainer 
        className="py-5 z-index-20 position-relative mt-5"
        circles={[
          { 
            class: "circle-one",
            style: {
              width: "15rem",
              height: "15rem",
              transform: "translateY(5rem)"
            } 
          },
        ]}
      >
        <Row className="align-items-center mt-5">
          <Hero />
        </Row>
      </OverlayContainer>
    </section>
  )
}
export default HeroContainer;