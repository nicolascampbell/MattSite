import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import YoutubeEmbed from '../components/YoutubeEmbed'
const Musica = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <h1 className=" text-center">Musica</h1>
        </Col>
        <Col xs={12} className="text-center">
          <h5 className="fw-light">
            Is comming somewhen! Meanwhile you can enjoy some music
          </h5>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 10, offset: 1 }}>
          <iframe
            width="100%"
            height={300}
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1471579978&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
          <div
            style={{
              fontSize: 10,
              color: "#cccccc",
              lineBreak: "anywhere",
              wordBreak: "normal",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              fontFamily:
                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
              fontWeight: 100
            }}
          >
            <a
              href="https://soundcloud.com/matias-g-campbell"
              title="Matt Goez 🗯"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Matt Goez 🗯
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/matias-g-campbell/sirena"
              title="Sirena"
              target="_blank"
              style={{ color: "#cccccc", textDecoration: "none" }}
            >
              Sirena
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default Musica
