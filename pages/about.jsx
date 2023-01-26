import React, { useEffect, useRef } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import InstagramIcon from '@mui/icons-material/Instagram'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
export const getStaticProps = async () => {
  const resulting = await fetch(
    `http://localhost:1337/api/about-page?populate=*`
  )
  const result = await resulting.json()

  return {
    props: {
      title: result.data.attributes.title,
      description: result.data.attributes.description,
      image: result.data.attributes.image
    }
  }
}
const defaultTitle = 'Desgreñado'
const defaultDescription =
  'Bienvenue a la pagina de Matias. Si bien Matias y su cabeza no entran en esta pagina hacemos lo que podemos Aca podes llegar a encontrar cosas de muy distinta indole un poco a la par de como se siente interactuar con el. Te distraes y esta haciendo alfombras. Si queres experimentar mas sobre esta bella persona podes encontrarlo en los links de abajo.'
const about = ({
  title = defaultTitle,
  description = defaultDescription,
  image
}) => {
  const router = useRouter()
  const getLink = (path) => `${router.basePath}${path}`

  return (
    <Container fluid className="about-page p-4  ">
      <Row>
        <Col xs={12} md={{ span: 4, offset: 1 }}>
          <img
            src={'http://localhost:1337' + image.data.attributes.url}
            srcSet={'http://localhost:1337' + image.data.attributes.url}
            alt={image.data.attributes.alternativeText}
            loading="lazy"
            height="auto"
            width={'100%'}
          />
        </Col>
        <Col xs={12} md={{ span: 7 }}>
          <div>
            <h5>{title}</h5>
            <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.instagram.com/mattgoez_/"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              href="mailto:matigoez.uy@gmail.com"
              rel="noopener noreferrer"
              className="me-2"
            >
              <AlternateEmailIcon />
            </a>
            <span>matigoez.uy@gmail.com</span>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default about
