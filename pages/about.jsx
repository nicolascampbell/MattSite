import React, { useEffect, useRef } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useRouter } from 'next/router'
import InstagramIcon from '@mui/icons-material/Instagram'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

const about = () => {
  const router = useRouter()
  const getLink = (path) => `${router.basePath}${path}`

  // const body = useRef(null)
  // const specialCol = useRef()
  // let timestamp = Date.now()
  // let lastMouseX = null
  // let lastMouseY = null

  // useEffect(() => {
  //   if (body)
  //     body.current.addEventListener('mousemove', function (e) {
  //       if (timestamp === null) {
  //         timestamp = Date.now()
  //         lastMouseX = e.screenX
  //         lastMouseY = e.screenY
  //         return
  //       }
  //       let now = Date.now()
  //       let dt = now - timestamp
  //       const dx = Math.abs(e.screenX - lastMouseX)
  //       const dy = Math.abs(e.screenY - lastMouseY)
  //       if (dt > 300 && specialCol.current && dx + dy > 200) {
  //         specialCol.current.scrollTo(e.screenX * 2, e.screenY * 2)
  //         timestamp = now
  //         lastMouseX = e.screenX
  //         lastMouseY = e.screenY
  //       }
  //     })
  //   return () => {
  //     if (body)
  //       body.current?.removeEventListener('mousemove', () =>
  //         console.log('abort')
  //       )
  //   }
  // }, [body])

  return (
    <Container fluid className="about-page p-4  ">
      <Row>
        <Col xs={12}  md={{ span: 4, offset: 1 }}>
          <img
            src={getLink('/about_mati.webp')}
            srcSet={getLink('/about_mati.webp')}
            alt={'Foto de Matias'}
            loading="lazy"
            height="auto"
            width={'100%'}
          />
        </Col>
        <Col xs={12} md={{ span: 7 }}>
          <div>
            <h5>Desgreñado</h5>
            <p style={{ whiteSpace: 'pre-line' }}>
              Bienvenue a la pagina de Matias. Si bien Matias y su cabeza no
              entran en esta pagina hacemos lo que podemos.
            </p>
            <p style={{ whiteSpace: 'pre-line' }}>
              Aca podes llegar a encontrar cosas de muy distinta indole un poco
              a la par de como se siente interactuar con el. Te distraes y esta
              haciendo alfombras. Si queres experimentar mas sobre esta bella
              persona podes encontrarlo en los links de abajo.
            </p>
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
