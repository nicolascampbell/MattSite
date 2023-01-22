import '../styles/globals.scss'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { Container, Col, Row } from 'react-bootstrap'
import { Footer } from '../components/Footer'
import NavbarMenu from '../components/NavbarMenu'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Container style={{ height: '100vh' }} fluid>
        <NavbarMenu />
        <Row>
          <Component {...pageProps} />
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Container>
    </SSRProvider>
  )
}

export default MyApp
