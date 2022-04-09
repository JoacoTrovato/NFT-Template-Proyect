import React from 'react';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import svg from '../../assets/Untitled.svg';
import background from '../../assets/greybackground.jpg';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

var sectionStyle = {
  backgroundImage: `url(${background})`,
  marginBottom: '1rem',
  marginTop: '1.2rem',
  marginLeft: '0.8rem',
  marginRight: '-0.4rem',
  height: '14rem',
  borderRadius: '0.5rem',
};

var sectionStyles1 = {
  backgroundImage: `url(${svg})`,
};

export function Bids() {
  return (
   <Container fluid className='py-5 px-5 bg-hl-primary'>
          <Row className="mx-5">
            
            <Col className="d-flex border border-dark border-2 mx-4 mb-5 mt-5" style={{borderRadius:"0.5rem", width:"15rem",}}>
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className=''>
                    <Image src={svg} style={{height:"6rem", marginBottom:"-4.5rem", marginTop:"-1rem",
                  marginRight:"10rem", marginLeft:"-1rem"}}/>
                  </Col>
                  <Col className=''>
                    <Button className='bg-hl-primary border-dark' style={{height:"1.5rem", marginLeft:"9rem", marginBottom:"-3rem", marginTop:"-2.5rem",}}><h2 style={{marginTop:"-1.6rem"}}>...</h2></Button>
                  </Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8" style={{marginLeft:"3rem", marginRight:"-1rem"}}><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            <Col className="d-flex border border-dark border-2 mx-4 mb-5 mt-5" style={{borderRadius:"0.5rem", width:"15rem",}}>
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className=''>
                    <Image src={svg} style={{height:"6rem", marginBottom:"-4.5rem", marginTop:"-1rem",
                  marginRight:"10rem", marginLeft:"-1rem"}}/>
                  </Col>
                  <Col className=''>
                    <Button className='bg-hl-primary border-dark' style={{height:"1.5rem", marginLeft:"9rem", marginBottom:"-3rem", marginTop:"-2.5rem",}}><h2 style={{marginTop:"-1.6rem"}}>...</h2></Button>
                  </Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8" style={{marginLeft:"3rem", marginRight:"-1rem"}}><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>

            <Col className="d-flex border border-dark border-2 mx-4 mb-5 mt-5" style={{borderRadius:"0.5rem", width:"15rem",}}>
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className=''>
                    <Image src={svg} style={{height:"6rem", marginBottom:"-4.5rem", marginTop:"-1rem",
                  marginRight:"10rem", marginLeft:"-1rem"}}/>
                  </Col>
                  <Col className=''>
                    <Button className='bg-hl-primary border-dark' style={{height:"1.5rem", marginLeft:"9rem", marginBottom:"-3rem", marginTop:"-2.5rem",}}><h2 style={{marginTop:"-1.6rem"}}>...</h2></Button>
                  </Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8" style={{marginLeft:"3rem", marginRight:"-1rem"}}><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>

            <Col className="d-flex border border-dark border-2 mx-4 mb-5 mt-5" style={{borderRadius:"0.5rem", width:"15rem",}}>
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className=''>
                    <Image src={svg} style={{height:"6rem", marginBottom:"-4.5rem", marginTop:"-1rem",
                  marginRight:"10rem", marginLeft:"-1rem"}}/>
                  </Col>
                  <Col className=''>
                    <Button className='bg-hl-primary border-dark' style={{height:"1.5rem", marginLeft:"9rem", marginBottom:"-3rem", marginTop:"-2.5rem",}}><h2 style={{marginTop:"-1.6rem"}}>...</h2></Button>
                  </Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8" style={{marginLeft:"3rem", marginRight:"-1rem"}}><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            </Row>

            <Row className="mx-5">

            <Col className="d-flex border border-dark border-2 mx-4 mb-5 mt-5" style={{borderRadius:"0.5rem", width:"15rem",}}>
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className=''>
                    <Image src={svg} style={{height:"6rem", marginBottom:"-4.5rem", marginTop:"-1rem",
                  marginRight:"10rem", marginLeft:"-1rem"}}/>
                  </Col>
                  <Col className=''>
                    <Button className='bg-hl-primary border-dark' style={{height:"1.5rem", marginLeft:"9rem", marginBottom:"-3rem", marginTop:"-2.5rem",}}><h2 style={{marginTop:"-1.6rem"}}>...</h2></Button>
                  </Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8" style={{marginLeft:"3rem", marginRight:"-1rem"}}><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            <Col className="d-flex border border-dark border-2 mx-4 mb-5 mt-5" style={{borderRadius:"0.5rem", width:"15rem",}}>
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className=''>
                    <Image src={svg} style={{height:"6rem", marginBottom:"-4.5rem", marginTop:"-1rem",
                  marginRight:"10rem", marginLeft:"-1rem"}}/>
                  </Col>
                  <Col className=''>
                    <Button className='bg-hl-primary border-dark' style={{height:"1.5rem", marginLeft:"9rem", marginBottom:"-3rem", marginTop:"-2.5rem",}}><h2 style={{marginTop:"-1.6rem"}}>...</h2></Button>
                  </Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8" style={{marginLeft:"3rem", marginRight:"-1rem"}}><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            <Col className="d-flex border border-dark border-2 mx-4 mb-5 mt-5" style={{borderRadius:"0.5rem", width:"15rem",}}>
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className=''>
                    <Image src={svg} style={{height:"6rem", marginBottom:"-4.5rem", marginTop:"-1rem",
                  marginRight:"10rem", marginLeft:"-1rem"}}/>
                  </Col>
                  <Col className=''>
                    <Button className='bg-hl-primary border-dark' style={{height:"1.5rem", marginLeft:"9rem", marginBottom:"-3rem", marginTop:"-2.5rem",}}><h2 style={{marginTop:"-1.6rem"}}>...</h2></Button>
                  </Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8" style={{marginLeft:"3rem", marginRight:"-1rem"}}><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>
            
            <Col className="d-flex border border-dark border-2 mx-4 mb-5 mt-5" style={{borderRadius:"0.5rem", width:"15rem",}}>
              <Row className="justify-content-center bg-transparent w-100">
                <Row className="w-auto m-auto">
                  <Col className=''>
                    <Image src={svg} style={{height:"6rem", marginBottom:"-4.5rem", marginTop:"-1rem",
                  marginRight:"10rem", marginLeft:"-1rem"}}/>
                  </Col>
                  <Col className=''>
                    <Button className='bg-hl-primary border-dark' style={{height:"1.5rem", marginLeft:"9rem", marginBottom:"-3rem", marginTop:"-2.5rem",}}><h2 style={{marginTop:"-1.6rem"}}>...</h2></Button>
                  </Col>
                </Row>
                <Row className="text-light mt-3 mx-n3">
                  <Col className='border-dark' style={sectionStyle} alt=""></Col>
                </Row>

                <Row className='m-auto'>
                  <Col className='m-auto'>
                    <Link to={`/licenses/:licenseId`}>
                      <h6 className="text-light">Licence name</h6>
                    </Link>
                  </Col>
                </Row>
                <Row className='m-auto'>
                  <h4>0.00 HELI</h4>
                </Row>
                <Row className="m-auto">
                  <Col className='' ><h6 className="h8 text-hl-cta">Buy now</h6></Col>
                  <Col className='pl-5 ml-5'><h6 className="h8" style={{marginLeft:"3rem", marginRight:"-1rem"}}><AiFillHeart />92</h6></Col>
                </Row>
              </Row>
            </Col>

          <Row className='justify-content-center align-items-center'>
            <Button className="primary-btn w-25">Load More</Button>
          </Row>
        
    </Row>
      
    </Container>
  )
}

export default Bids;
