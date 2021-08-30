import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { ReactComponent as Logo } from '../logo.svg';

const NavBar = () => {
  return (
    <div>
    <Navbar bg="light" variant="light">
      <Container>
        <Logo />
      </Container>
    </Navbar>
    </div>
  );
};

export default NavBar;
