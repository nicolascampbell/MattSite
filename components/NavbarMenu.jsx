import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import RotatingText from './RotatingText'
import { useRouter } from 'next/router'
import { Stack } from '@mui/material'

import useMediaQuery from '@mui/material/useMediaQuery'
import Slide from '@mui/material/Slide'
import Zoom from '@mui/material/Zoom'
import { useKeyPress } from 'hooks/useKeyPress'
export const NavbarMenu = () => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const escPress = useKeyPress('Escape')

  const router = useRouter()
  const matchesSmallDevices = useMediaQuery('(max-width:768px)')
  const getLink = (path) => `${router.basePath}${path}`
  function handleOpenMenu(shouldOpen) {
    if (shouldOpen) {
      document.body.classList.add('scroll-lock')
      document.documentElement.classList.add('scroll-lock')
    } else {
      document.body.classList.remove('scroll-lock')
      document.documentElement.classList.remove('scroll-lock')
    }
    setOpenMenu(shouldOpen)
  }
  React.useEffect(() => {
    if (openMenu) handleOpenMenu(false)
  }, [escPress])
  function navigateAndClose(route) {
    router.push(route).then(() => handleOpenMenu(false))
  }
  return (
    <Navbar bg="light" className="custom-navbar">
      <Navbar.Brand
        onClick={() => navigateAndClose('/')}
        className="m-0 cursor-pointer"
      >
        <RotatingText />
      </Navbar.Brand>
      <div
        className={`menu ${openMenu ? 'isOpen' : 'isClosed'}`}
        onClick={() => handleOpenMenu(!openMenu)}
      >
        <span className="menu-title me-2 open">Menu</span>
        <span className="menu-title me-2 close">Close</span>
        <div className="menu-detail"></div>
      </div>

      <Slide direction="left" in={openMenu}>
        <Stack className="menu-items me-2" alignItems="flex-end">
          <Nav.Link
            onClick={() => navigateAndClose('/')}
            disabled={router.pathname.slice(1) === ''}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => navigateAndClose('/about')}
            disabled={router.pathname.slice(1) === 'about'}
          >
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => navigateAndClose('/commercial')}
            disabled={router.pathname.slice(1) === 'commercial'}
          >
            Commercial
          </Nav.Link>
          <Nav.Link
            onClick={() => navigateAndClose('/personal')}
            disabled={router.pathname.slice(1) === 'personal'}
          >
            Personal
          </Nav.Link>
          <Nav.Link
            onClick={() => navigateAndClose('/films')}
            disabled={router.pathname.slice(1) === 'films'}
          >
            Films
          </Nav.Link>
          <Nav.Link
            onClick={() => navigateAndClose('/misc')}
            disabled={router.pathname.slice(1) === 'misc'}
          >
            Miscellaneous
          </Nav.Link>
        </Stack>
      </Slide>
      <Slide direction="up" in={openMenu}>
        <Stack className="menu-socials mb-3 me-3" direction="row" spacing={1}>
          <a
            target="_blank"
            href="https://www.instagram.com/mattgoez_/"
            rel="noopener noreferrer"
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
        </Stack>
      </Slide>

      {!matchesSmallDevices && (
        <Zoom in={openMenu} style={{ transitionDelay: '400ms' }}>
          <div className="menu-content text-end">
            <img src={getLink('/mona.jpg')} alt="" />
            <small>Monadots (placeholder)</small>
          </div>
        </Zoom>
      )}
    </Navbar>
  )
}
export default NavbarMenu
