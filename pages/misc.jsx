import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { CustomNavbar } from "../components/CustomNavbar";
import { Footer } from "../components/Footer";
import YoutubeEmbed from "../components/YoutubeEmbed";
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
            <h5>Prontamente... Mientras tanto:</h5>
          </Col>
          <Col xs={{ span: 10, offset: 1 }}>
            <YoutubeEmbed embedId="dzSiMeLqkI0" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default misc;
