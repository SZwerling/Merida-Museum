import React, { Component } from 'react';
import { Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(   
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand href="/home">The City Museum</NavbarBrand> 
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>  
                            <Nav navbar align-items="true">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/visit" >
                                        <i className="fa fa-users fa-lg" /> Visit
                                    </NavLink> 
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/events" >
                                        <i className="fa fa-calendar" /> Events
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/members" >
                                        <i className="fa fa-heart" /> Comments
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        )
    }
}

export default Header;