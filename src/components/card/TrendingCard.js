import React from 'react';
import { Container, Image, Row } from 'react-bootstrap';
import bids1 from '../../assets/bids1.png';
import bids2 from '../../assets/bids2.png';

var sectionStyle = {
    backgroundImage: `url(${bids1})`,
    marginBottom: '-7rem',
    height: '11rem',
}

var sectionStyles = {
    backgroundImage: `url(${bids2})`,
    height: '4rem',
    /* width: '4rem', */
}

export function TrendingCard() {
  return (
    <Container className='d-flex align-items-center justify-content-evenly'>
        <Row className='d-flex overflow-hidden bg-dark justify-content-center border rounded-1 border-dark mt-5 mb-5' style={{ width: '17rem', height: '400px' }}>
            <Row className='d-flex w-100' style={sectionStyle}></Row>
            <Row className='d-flex justify-content-center'>
                <Row className='d-flex justify-content-center rounded-circle w-25' style={sectionStyles}></Row>
                <h3 className="text-center mb-n3">License name</h3>
                <h6 className="h9 text-center">by Company name</h6>
                <h6 className="h9 text-center">Some quick example text to build on the card title and make up the bulk ofthe card's content.</h6> 
            </Row>
        </Row>  
    </Container>
    )
}

export default TrendingCard;