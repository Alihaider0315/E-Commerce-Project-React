import React from 'react'
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo.png';
import './header.css'
import Navigation from './Navigation';
const Header = () => {
  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <NavLink> 
      <img src={Logo} className='main_logo'/>
      </NavLink>
      <Navigation/>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header
