import React from 'react';
import Footer from '../../components/footer/Footer' 
import { Container } from 'react-bootstrap'; 

export const FooterContainer = () => {
  return (
    <Container fluid className='bg-hl-secondary' as="section">
        <Footer />
    </Container>
  )
}
export default FooterContainer; 
