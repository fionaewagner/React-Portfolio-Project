import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


const Header =()=>{
  const[menuOpen, setMenuOpen]=useState(false);
    return(
        <Navbar light className='bg-layout'  sticky="top" expand="md">
          <NavbarBrand href="/" className='ms-5'>
            <h1 className='mt-1'>Green Palms Hotel</h1>
          </NavbarBrand>
          <NavbarToggler onClick={()=> setMenuOpen(!menuOpen)}/>
          <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' navbar>
              <NavItem>
                <NavLink className='nav-link' to='/'>
                    Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='nav-link' to='/rooms'>
                    Accomodations
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='nav-link' to='/ammenities'>
                    Ammenities
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='nav-link' to='/contact'>
                    Contact
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink className='nav-link' to='/reservation'>
                    Reservation
                </NavLink>
              </NavItem>

            </Nav>
          </Collapse>
      </Navbar>
    )
}

export default Header