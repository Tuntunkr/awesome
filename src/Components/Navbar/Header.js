import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Logo from "./Group 1.svg"

function Header() {
  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        backgroundColor: "#FFF",
        borderBottom: "1px solid #EAEAEA",
      }}
      id="mainNav"
    >
      <Container className="customNav ">
        <Navbar.Brand as={NavLink} to="/" className="logo">
          <img src={Logo} alt="/" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end ">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/project">
              Project
            </Nav.Link>
            <Nav.Link as={NavLink} to="/articles">
              Articles
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
