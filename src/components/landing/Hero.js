import React from 'react';
import {Col, Button} from 'react-bootstrap';
import illustration from '../../template/img/hero/illu-2.svg';
import ScrollIntoView from 'react-scroll-into-view'

const Hero = () => {
    return (
      <>
      <Col lg="5">
        <h1>Create, sell and collect software license NFTs.</h1>
        <p className="text-muted">
        Acquire lifetime subscription opportunities in the form of non-fungible tokens. Raise capital for Saas products with a click of a button.  
        </p>
        <ScrollIntoView selector="#subscription-section">
          <Button as="a" className="btn-gradient-primary">Join The Whitelist</Button>
        </ScrollIntoView>
      </Col>
      <Col lg="6" className="ms-auto d-none d-lg-block">
        <img className="img-fluid mx-auto" src={illustration} alt=".." />
      </Col>
      </>
    )
}
export default Hero;