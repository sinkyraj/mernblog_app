import { useState } from 'react'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './AppBar.css'

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogOut= () =>{
    localStorage.removeItem('user')
     window.location='./login'
  }

  return (
    <Navbar color='light' light expand='md'>
      <Link to='/' className='link'>
        <NavbarBrand>Blog App</NavbarBrand>
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link to='/login' className='link'>
              <NavLink>Register/Login</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/profile' className='link'>
              <NavLink>My Profile</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/' className='link'>
              <NavLink>Home</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink onClick={handleLogOut}>Log Out</NavLink>
          </NavItem>
        </Nav>
        {/* <NavbarText>Simple Text</NavbarText> */}
      </Collapse>
    </Navbar>

  )

}
export default AppBar