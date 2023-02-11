import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Col, Row } from 'react-bootstrap'
import ReactFullpage from '@fullpage/react-fullpage'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import { IconButton } from '@mui/material'
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
    <div className="my-4 mb-5 fullpage-container">
      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={700} /* Options here */
        fitToSection
        keyboardScrolling
        navigation
        paddingBottom={'10px'}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section fullpage-section" ref={body}>
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
                        <source
                          src={getLink('/home-vid.mp4')}
                          type="video/mp4"
                        />
                      </video>
                    </Col>
                  </Row>
                  {/* <Row className='mt-4'>
                    <Col>
                      <IconButton onClick={() => fullpageApi.moveSectionDown()}>
                        <KeyboardArrowDownIcon />
                      </IconButton>
                    </Col>
                  </Row> */}
                </Container>
              </div>
              <div className=" section fullpage-section">
                <h3>Project 1</h3>
              </div>
              <div className="section  fullpage-section">
                <h3>Project 2</h3>
              </div>
              <div className="section  fullpage-section">
                <h3>Project 3</h3>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}
