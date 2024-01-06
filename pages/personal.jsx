import React from 'react'
import { Unstable_Grid2 as Grid } from '@mui/material' // Grid version 2
import ImageList from '../components/Overview'
const Personal = () => {
  return (
    <Grid container xs={12}>
        <Grid xs={12}>
          <ImageList />
        </Grid>
    </Grid>
  )
}
export default Personal
