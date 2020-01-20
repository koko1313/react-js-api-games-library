import React, {Component} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import {NavLink as RRNavLink} from 'react-router-dom';
import Container from "reactstrap/lib/Container";

class Header extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                <Container>
                    <NavLink
                        tag={RRNavLink}
                        className="navbar-brand"
                        exact to="/">
                        <i class="fa fa-gamepad mr-3"></i>
                        <span className="project-name">Библиотека с игри</span>
                    </NavLink>
                    <NavbarToggler onClick={this.toggleIsOpen} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Начало</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={RRNavLink} exact to="/games" activeClassName="active">Игри</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }

}

export default Header;