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
        <Navbar dark  sticky="top" expand="md">
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
            </Nav>
          </Collapse>
      </Navbar>
    )
}

export default Header