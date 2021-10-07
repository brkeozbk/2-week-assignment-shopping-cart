import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from "reactstrap";
import { Link } from "react-router-dom";

import { MDBInput,   MDBIcon,
} from "mdbreact";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (e) => {
    setIsOpen(!isOpen);
    e.preventDefault();

  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand >
            <Link to="/">Ecommerce</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink >
                  <Link to="/shop">Shop</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink ><Link to ="/stories">Stories</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to ="/about">About</Link>
                  
                  </NavLink>
            </NavItem>
            <NavItem>

           <MDBInput hint="Search" type="text" containerClass="mt-0" />
            </NavItem>

            <NavItem>
            <NavLink>
                <Link to = "/cart"> Cart </Link>
            <MDBIcon icon="shopping-cart" />
            </NavLink>
            </NavItem>

            <NavItem>
              <NavLink >
                  <Link to = "/login">Login</Link>
                  </NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
      
    </div>
  );
};

export default Navi;
