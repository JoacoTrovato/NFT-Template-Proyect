import React from 'react'
import './footer.css'
import nftlogo from '../../assets/logo-standalone.svg'
import { AiOutlineInstagram,AiOutlineTwitter, } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { Button, Col, Container, Image, Row } from 'react-bootstrap';


const Footer = () => {
  return (
    <>
      <Row fluid className=''>
        <Col className="footer-links">
          <Col className="footer-links_logo">
          <Col>
            <Image src={nftlogo} alt="logo" />
            <p>HEIRLOOMDAO</p>
          </Col>
          <Col>
            <h3>Get the lastes Updates</h3>
          </Col>
          <Col>
            <input type="text" placeholder='Your Email' />
            <Button>Email Me!</Button>
          </Col>
          </Col>
          <Col className="footer-links_div">
            <h4>HEIRLOOMDAO</h4>
            <p>Explore</p>
            <p>How it Works</p>
            <p>Counters</p>
            <p>Contact Us</p>
          </Col>
          <Col className="footer-links_div">
            <h4>Support</h4>
            <p>Help center</p>
            <p>Terms of service</p>
            <p>Legal</p>
            <p>Privacy policy</p>
          </Col>
        </Col>
        <Col className="footer-copyright">
          <Col>
          <p> © {(new Date().getFullYear())} HEIRLOOMDAO, Inc. All Rights Reserved</p>
          </Col>
          <Col>
            <AiOutlineInstagram size={25} color='white' className='footer-icon' />
            <AiOutlineTwitter size={25} color='white' className='footer-icon'/>
            <RiDiscordFill size={25} color='white' className='footer-icon'/>
            <FaTelegramPlane size={25} color='white'  className='footer-icon' />
          </Col>

        </Col>
      </Row>
    </>
  )
}

export default Footer
