import React from 'react'
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap'
import RotatingText from './RotatingText'
import { useRouter } from 'next/router'
import { Stack } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
export const NavbarMenu = () => {
  const router = useRouter()
  const getLink = (path) => `${router.basePath}${path}`

  return (
    <Navbar bg="light" className="custom-navbar">
      <Navbar.Brand href={getLink('/')} className="m-0">
        <RotatingText />
      </Navbar.Brand>
      <label className="me-2">
        <input type="checkbox" />
        <div className="menu">
          <span className="menu-title me-2 open">Menu</span>
          <span className="menu-title me-2 close">Close</span>
          <div className="menu-detail"></div>
        </div>
        <Stack className="menu-items me-2" spacing={1} alignItems="flex-end">
          <Nav.Link
            href={getLink('/')}
            disabled={router.pathname.slice(1) === ''}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href={getLink('/about')}
            disabled={router.pathname.slice(1) === 'about'}
          >
            About
          </Nav.Link>
          <Nav.Link
            href={getLink('/commercial')}
            disabled={router.pathname.slice(1) === 'commercial'}
          >
            Commercial
          </Nav.Link>
          <Nav.Link
            href={getLink('/personal')}
            disabled={router.pathname.slice(1) === 'personal'}
          >
            Personal
          </Nav.Link>
          <Nav.Link
            href={getLink('/films')}
            disabled={router.pathname.slice(1) === 'films'}
          >
            Films
          </Nav.Link>
          <Nav.Link
            href={getLink('/misc')}
            disabled={router.pathname.slice(1) === 'misc'}
          >
            Miscellaneous
          </Nav.Link>
        </Stack>
        <Stack className="menu-socials mb-3 me-3" direction="row" spacing={1}>
          <span className="me-3">Contact me on</span>
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
          >
            <AlternateEmailIcon />
          </a>
        </Stack>
      </label>
    </Navbar>
  )
}
export default NavbarMenu
