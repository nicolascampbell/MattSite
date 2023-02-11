import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ImageList from '../components/ImageList'
const Commercial = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h1 className=" text-center">Commercial Page</h1>
        </Col>
        <Col xs={12} className="text-center">
          <h5 className="fw-light">
            Is comming soon! Meanwhile you can look at some pictures
          </h5>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <ImageList />
        </Col>
      </Row>
    </Container>
  )
}
export default Commercial
