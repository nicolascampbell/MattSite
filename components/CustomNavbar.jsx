import React from "react";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import RotatingText from "./RotatingTextNavbar";
import { useRouter } from "next/router";

export const CustomNavbar = () => {
  const router = useRouter();
  const getLink = (path) => `${router.basePath}${path}`;

  return (
    <Navbar bg="light" expand="lg" className="custom-navbar m-lg-3">
      <Navbar.Brand href={getLink("/")} className="m-0">
        <RotatingText />
      </Navbar.Brand>
      <Nav className="flex-column">
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
    </Navbar>
  );
};
