import React from 'react';
import { Button, Container, Col, Row, FormSelect } from 'react-bootstrap';
import { Bids } from '../../components';

var sectionStyle = {
    marginBottom: 'rem',
    marginTop: 'rem',
    marginLeft: '-6rem',
    marginRight: '-6rem',
  };
  
export function MarketPlacePage({title}) {
  return (
        <Container fluid className='bg-hl-primary px-5 py-5'>
            <Row className='py-5'>
                <Col>
                    <h1>Explore all NFTs.</h1>
                </Col>
            </Row>
            <Row className='ml-5 mr-5 pr-5 pl-5'>
                <Col>
                    <Button style={{width: "5.5rem", height: "2.815rem"}} variant="hl-primary btn-outline-hl-light-mild text-hl-light mb-3" size="sm">Blockchain</Button> {' '}
                </Col>
                <Col>
                    <Button style={{width: "5.5rem", height: "2.815rem"}} variant="hl-primary btn-outline-hl-light-mild text-hl-light mb-3" size="sm">Category</Button> {' '}
                </Col>
                <Col>
                    <Button style={{width: "5.5rem", height: "2.815rem"}} variant="hl-primary btn-outline-hl-light-mild text-hl-light mb-3" size="sm">Collections</Button> {' '}
                </Col>
                <Col>
                    <Button style={{width: "5.5rem", height: "2.815rem"}} variant="hl-primary btn-outline-hl-light-mild text-hl-light mb-3" size="sm">On Sale</Button> {' '}
                </Col>
                <Col>
                    <Button style={{width: "5.5rem", height: "2.815rem"}} variant="hl-primary btn-outline-hl-light-mild text-hl-light mb-3" size="sm">Price range</Button> {' '}
                </Col>
                <Col>
                    <FormSelect>
                        <option value="ETH">ETH</option>
                        <option value="BTC">BTC</option>
                        <option value="LTC">LTC</option>
                    </FormSelect>
                </Col>
            </Row>
            <Col style={sectionStyle}>
                <Bids />
            </Col>
                
        </Container>
    )
};
export default MarketPlacePage;
