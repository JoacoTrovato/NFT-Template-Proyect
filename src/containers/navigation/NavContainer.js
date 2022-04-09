import React from 'react'; 
import { Navbar, Container} from 'react-bootstrap';
import { Header } from '../../components/navigation/Header';

const NavContainer = () => {
  return (
    <Navbar variant="dark" expand="lg" fixed="top" id="navbar" className="">
        <Container>
          <Header />
        </Container>
    </Navbar>
  )
}
export default NavContainer;