import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import logo from "../../images/estrela.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar bg="success" variant="dark">
      <Container>
        <img
          src={logo}
          className="star-image-header my-3"
          alt="Logo de estrela amarela"
        />
        <LinkContainer to="/">
          <Navbar.Brand>CRM STARS</Navbar.Brand>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Página inicial</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/orders">
            <Nav.Link>Pedidos</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}
