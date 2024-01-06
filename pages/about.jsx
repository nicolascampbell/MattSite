import React from 'react'
import { useRouter } from 'next/router'
import { Unstable_Grid2 as Grid } from '@mui/material' // Grid version 2
import InstagramIcon from '@mui/icons-material/Instagram'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import Image from 'next/image'
export default function About() {
  const router = useRouter()
  const getLink = (path) => `${router.basePath}${path}`
  return (
    <Grid container justifyContent={'center'} className="about-page">
      <Grid xs={5} md={5}>
        <Image
          src={getLink('/about_mati2.jpg')}
          srcSet={getLink('/about_mati2.jpg')}
          alt={'Foto of Matias'}
          loading="lazy"
          height={1756}
          width={1429}
        />
      </Grid>
      <Grid xs={10} md={6}  >
        <div className="about-text p-3">
          <h2 className='mb-4'>Matías Gonzales</h2>
          <p style={{ whiteSpace: 'pre-line' }}>
            Bienvenue a la pagina de Matias. Si bien Matias y su cabeza no
            entran en esta pagina hacemos lo que podemos.
          </p>
          <p style={{ whiteSpace: 'pre-line' }}>
            Aca podes llegar a encontrar cosas de muy distinta indole un poco a
            la par de como se siente interactuar con el. Te distraes y esta
            haciendo alfombras. Si queres experimentar mas sobre esta bella
            persona podes encontrarlo en los links de abajo.
          </p>
        </div>
        <div className='about-socials'>
          <a
            target="_blank"
            href="https://www.instagram.com/mattgoez_/"
            rel="noopener noreferrer"
            className="me-4"
          >
            Instagram
          </a>
          <a
            target="_blank"
            href="mailto:matigoez.uy@gmail.com"
            rel="noopener noreferrer"
          >
            matigoez.uy@gmail.com
          </a>
        </div>
      </Grid>
    </Grid>
  )
}
