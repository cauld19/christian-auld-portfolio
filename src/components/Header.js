import React from "react";
import { Nav, NavItem, Navbar, NavbarBrand, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

export default function Header () {
    return (
        <div className="w-75 p-3 mx-auto">
            <Navbar>
                <NavbarBrand tag={Link} to={'/'} className="nav-link text-dark font-weight-bold" >Christian Auld</NavbarBrand>
                    <Nav className="nav nav-tabs">
                        <NavItem className="nav-item">
                            <Link to="/about" className="nav-link text-secondary font-weight-bold" >About</Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link className="nav-link text-secondary font-weight-bold" to="/projects">Projects</Link>
                        </NavItem>
                        <NavItem className="nav-item">
                            <Link className="nav-link text-secondary font-weight-bold" to="/contact">Contact</Link>
                        </NavItem>
                    </Nav>
            </Navbar>
        </div>
    )
}