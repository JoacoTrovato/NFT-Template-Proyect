import React from 'react';
import { Team } from '../../components/landing';
import { Row } from 'react-bootstrap';
import OverlayContainer from '../general/OverlayContainer';

const TeamContainer = () => {
  return (
    <section id="team-section" className="py-5">
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
          <Team />
        </Row>
      </OverlayContainer>
    </section>
  )
}

export default TeamContainer; 