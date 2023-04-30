import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faUser
  
} from "@fortawesome/free-solid-svg-icons";


const Header =()=>{
  const[menuOpen, setMenuOpen]=useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const token = sessionStorage.getItem("token")
    return(
        <Navbar light className='navbar'  sticky="top" expand="md">
          <NavbarBrand href="/" className='ms-5'>
            <h1 className='mt-1 add-txt-outline'>GREEN PALMS HOTEL</h1>
          </NavbarBrand>
          <NavbarToggler onClick={()=> setMenuOpen(!menuOpen)}/>
          <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' navbar>
              <NavItem>
                <NavLink className='nav-link ' to='/'>
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
              <NavItem>
              <Dropdown isOpen={isOpen} toggle={toggle}>
                    <DropdownToggle caret>
                      <FontAwesomeIcon icon={faUser}/>
                    </DropdownToggle>
                    <DropdownMenu>
                                {!token && <DropdownItem>
                                  <NavLink className='nav-link' to='/reg'>
                                      Register
                                  </NavLink>
                                </DropdownItem>}
                                {!token && <DropdownItem>
                                  <NavLink className='nav-link' to='/reg'>
                                      Sign in
                                  </NavLink>
                                </DropdownItem>}
                                {token && <DropdownItem>
                                  <NavLink className='nav-link' to='/user'>
                                      My Reservations
                                  </NavLink>
                                </DropdownItem>}
                    </DropdownMenu>
                    </Dropdown>
              </NavItem>

            </Nav>
          </Collapse>
      </Navbar>
    )
}

export default Header