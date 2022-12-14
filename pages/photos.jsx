import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import ImageList from "../components/ImageList";
import { Footer } from "../components/Footer";

const photos = () => {
  return (
    <React.Fragment>
      <Container style={{ minHeight: "100vh" }} fluid>
        <CustomNavbar />
        <Row>
          <Col
            lg={{ span: 10, offset: 1 }}
            xs={{ span: 12 }}
            className="d-flex justify-content-center"
          >
            <ImageList />
          </Col>
        </Row>
        <Footer />
      </Container>
    </React.Fragment>
  );
};
export default photos;
