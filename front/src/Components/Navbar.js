import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap';
function Navabar() {
  return <div>


<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Polices Des Polices</Navbar.Brand>
    <Nav className="me-auto">
     {/*  <Nav.Link href="">Search</Nav.Link> */}
    {/*  <Link to="">Search</Link>
      <Link to="/AddPerson">AddPerson</Link> */}
  
      <Nav.Link href="/">Chercher Un Individu</Nav.Link>
      <Nav.Link href="/AddPerson">Ajouter Un Individu</Nav.Link> 
      <Nav.Link href="/All">Liste Des Individus</Nav.Link> 
      
      {/*<Nav.Link href='/Detail/:cin'>Detail</Nav.Link>*/}
      
    </Nav>
    </Container>
  </Navbar>
  </div>;
}

export default Navabar;
