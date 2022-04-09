import React from 'react';
import { Row } from 'react-bootstrap'; 
import { Whitepaper } from '../../components/landing'; 
import OverlayContainer from '../general/OverlayContainer';

const WhitepaperContainer = () => {
  return (
    <section id="whitepaper-section" className="py-5">
    <OverlayContainer fluid
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
        <Whitepaper />
      </Row>
    </OverlayContainer>
    </section>
  )
}
export default WhitepaperContainer;