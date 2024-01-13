import 'styles/globals.scss'
import React from 'react'
import { Unstable_Grid2 as Grid } from '@mui/material' // Grid version 2
import { Footer } from '../components/Footer'
import NavbarMenu from 'components/NavbarMenu'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Mattgoez</title>
      </Head>
      <Grid padding={2} container style={{ height: '100vh' }}>
        <Grid item xs={12}>
          <NavbarMenu />
        </Grid>
        <Grid item xs={12}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default MyApp
