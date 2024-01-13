import React from 'react'
import { Unstable_Grid2 as Grid } from '@mui/material' // Grid version 2
import { ImageSeries } from '../components/ImageSeries'
const Personal = () => {
  return (
    <Grid container xs={12}>
      <Grid xs={12}>
        <ImageSeries title={"Serie 1"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "} />
      </Grid>
    </Grid>
  )
}
export default Personal
