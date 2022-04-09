import React from 'react';
import { Container } from 'react-bootstrap';
import { AboutContainer, HeroContainer, RoadmapContainer, SubscriptionContainer, TeamContainer, TrendingContainer, WhitepaperContainer } from '../../components/containers/home';

const Home = () => {

  return (
    <Container >
      <HeroContainer />
      <TrendingContainer />
      <AboutContainer />
      <TeamContainer />
      <RoadmapContainer />
      <WhitepaperContainer />
      <SubscriptionContainer />
    </Container>
  )
};

export default Home;
