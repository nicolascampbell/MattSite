import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import { Footer } from "../components/Footer";
const misc = () => {
  return (
    <React.Fragment>
      <Container style={{ height: "100vh" }} fluid>
        <CustomNavbar />
        <Row>
          <Col
            lg={{ span: 6, offset: 3 }}
            className="d-flex justify-content-center"
          >
            Prontamente...
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default misc;
