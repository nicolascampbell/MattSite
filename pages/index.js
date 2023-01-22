import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Col, Row } from 'react-bootstrap'

export default function Home() {
  const router = useRouter()
  const getLink = (path) => `${router.basePath}${path}`
  const body = useRef(null)
  const videoRef = useRef()
  const [playbackRate, setPlaybackRate] = useState(0.3)
  let timestamp = Date.now()
  let lastMouseX = null
  let lastMouseY = null

  useEffect(() => {
    if (body)
      body.current.addEventListener('mousemove', function (e) {
        if (timestamp === null) {
          timestamp = Date.now()
          lastMouseX = e.screenX
          lastMouseY = e.screenY
          return
        }
        let now = Date.now()
        let dt = now - timestamp

        if (dt > 100) {
          let dx = e.screenX - lastMouseX
          let dy = e.screenY - lastMouseY
          const playbackSpeed =
            Math.abs(Math.round((dx / dt) * 100)) +
            Math.abs(Math.round((dy / dt) * 100))
          if (playbackSpeed < 100) {
            setPlaybackRate(0.2)
          } else if (playbackSpeed > 500) {
            setPlaybackRate(0.7)
          }
          timestamp = now
          lastMouseX = e.screenX
          lastMouseY = e.screenY
        }
      })
    return () => {
      if (body)
        body.current?.removeEventListener('mousemove', () =>
          console.log('abort')
        )
    }
  }, [body])
  useEffect(() => {
    videoRef.current.playbackRate = playbackRate
    const timer = setTimeout(() => {
      if (videoRef.current.playbackRate > 0.3) setPlaybackRate(0.3)
    }, 5000)
    return () => clearTimeout(timer)
  }, [playbackRate])

  return (
    <Container fluid ref={body}>
      <Row>
        <Col
          lg={{ span: 6, offset: 3 }}
          className="d-flex justify-content-center"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            className="home-images"
            width="600"
            height="600"
          >
            <source src={getLink('/home-vid.mp4')} type="video/mp4" />
          </video>
        </Col>
      </Row>
    </Container>
  )
}
