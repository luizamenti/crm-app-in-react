import React from "react";

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
        <Navbar.Brand href="#home">CRM STARS</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Página inicial</Nav.Link>
          <Nav.Link href="#features">Pedidos</Nav.Link>
          <Nav.Link href="#pricing">Análise</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
