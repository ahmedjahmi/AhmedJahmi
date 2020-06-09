import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

export default class MainNav extends Component {
									constructor(props) {
										super(props);

										this.toggle = this.toggle.bind(this);
										this.state = {
											isOpen: false
										};
									}
									toggle() {
										this.setState({
											isOpen: !this.state.isOpen
										});
									}
									render() {
										return (
											<NavWrapper>
												<Navbar expand='md'>
													<NavbarBrand href='/'>
														<i className='fas fa-home' />
													</NavbarBrand>
													<NavbarToggler
														onClick={this.toggle}
													>
														<i className='fas fa-bars' />
													</NavbarToggler>
													<Collapse
														isOpen={this.state.isOpen}
														navbar
													>
														<Nav className='mr-auto' navbar>
															<NavItem>
																<NavLink tag={Link} to='/ProjectList'>
																	Projects
																</NavLink>
															</NavItem>
															<NavItem>
																<NavLink tag={Link} to='/Resume'>
																	openResume(me.name)
																</NavLink>
															</NavItem>
															<NavItem>
																<NavLink tag={Link} to='/Contact'>
																	Contact
																</NavLink>
															</NavItem>
														</Nav>
													</Collapse>
												</Navbar>
											</NavWrapper>
										);
									}
								}

const NavWrapper = styled.div`
	/* background: var(--mainVanilla); */
	background-color: white;
	i {
		/* color: var(--mainWhite); */
		color: green;
		background-color: black;
		padding: 5px;
		border-radius: 3px;
	}
	.navbar-toggler {
		&:focus {
			
		}
	}
  .nav-link {
	/* color: var(--mainWhite) !important; */
	background-color: black;
	color: green;
	text-decoration: none;
    font-size: 1.2rem;
  }
  .nav-item {
	  /* color: green; */
	  /* background-color: black; */
  }
  .navbar-brand {
    color: var(--mainWhite) !important;
    font-size: 1.4rem;

  }
`;