import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Container, Col, Row } from 'react-bootstrap'
import ReactFullpage from '@fullpage/react-fullpage'
import { Unstable_Grid2 as Grid } from '@mui/material' // Grid version 2
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import { IconButton } from '@mui/material'
export default function Home() {
  const router = useRouter()
  const getLink = (path) => `${router.basePath}${path}`

  return (
    <Grid container xs={12} justifyContent="center" alignContent={'center'}> 
      <Grid xs={12} md={5}>
        <video
          autoPlay
          loop
          className="home-images"
          width="100%"
          height="auto"
        >
          <source
            src={getLink('/home-vid.mp4')}
            type="video/mp4"
          />
        </video>
      </Grid>
    </Grid>
  )
}
