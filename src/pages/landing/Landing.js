import React from 'react';
import { Container } from 'react-bootstrap';
import { 
  LandingAboutContainer, 
  LandingHeroContainer, 
  LandingRoadmapContainer, 
  LandingSubscriptionContainer, 
  LandingTeamContainer, 
  LandingWhitepaperContainer,
  LandingCardContainer,
  LandingTrendingContainer, 
} from '../../containers';

const Landing = () => {
  return (
    <Container className="bg-hl-primary-dark" fluid>
      <LandingHeroContainer/>
      <LandingTrendingContainer />
      {/* <LandingCardContainer /> */}
      <LandingAboutContainer />
      <LandingTeamContainer />
      <LandingRoadmapContainer />
      <LandingWhitepaperContainer />
      <LandingSubscriptionContainer />
    </Container>
  )
}

export default Landing;