import React from "react";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import RotatingText from "./RotatingText";
import { useRouter } from "next/router";

export const CustomNavbar = () => {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  console.log(router.pathname.slice(1));
  return (
    <Navbar bg="light" expand="lg" className="custom-navbar m-lg-3">
      <Container fluid>
        <Row className="w-100 p-0 m-0">
          <Col lg="2" className="d-flex align-items-center">
            <Navbar.Brand href={getLink("/")}>
              <RotatingText />
            </Navbar.Brand>
          </Col>
          <Col lg={{ span: 2, offset: 8 }}>
            <Nav className="me-auto flex-column">
              <Nav.Link
                href={getLink("/about")}
                disabled={router.pathname.slice(1) === "about"}
              >
                About
              </Nav.Link>
              <Nav.Link
                href={getLink("/photos")}
                disabled={router.pathname.slice(1) === "photos"}
              >
                Photos
              </Nav.Link>
              <Nav.Link
                href={getLink("/misc")}
                disabled={router.pathname.slice(1) === "misc"}
              >
                Miscellaneous
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
