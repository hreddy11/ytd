import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">YouTube Downloader</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
