import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ImageList from '../components/ImageList'

const photos = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          lg={{ span: 10, offset: 1 }}
          xs={{ span: 12 }}
          className="d-flex justify-content-center"
        >
          <ImageList />
        </Col>
      </Row>
    </Container>
  )
}
export default photos
