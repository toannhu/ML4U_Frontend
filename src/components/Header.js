import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Image } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import Logo from "../assets/img/logo.png";
import "./Header.css";

const Header = () => {
  const scrollTo = id => e => {
    e.preventDefault();
    console.log("id", id);
    scroll.scrollTo({
      duration: 1500,
      delay: 100,
      smooth: "easeInOutQuint",
      containerId: id
    });
  };

  return (
    <header>
      <Navbar bg="none" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={scrollTo("home")}
            aria-label="Logo"
          >
            <Image src={Logo} size="tiny" floated id="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span />
            <span />
            <span />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Home
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                About
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="article"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Projects
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="members"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Members
              </Link>
              <Link
                href="#"
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={400}
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
