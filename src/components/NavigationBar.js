import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, InputGroup, Form, Button } from 'react-bootstrap';
import '../css/fontawesome.css'
import '../css/app.css';

export const NavigationBar = () => {
    return (
        <Fragment>
            <Navbar expand="lg" className="bg-body-tertiary p-4">
                <Container>
                    <div className="d-flex flex-row w-100 align-items-center">
                        <div className="me-auto">
                            <Navbar.Brand as={Link} to='/' className='fw-bold'>
                                <span className='text-primary'>Eco</span>Connect
                            </Navbar.Brand>
                        </div>
                        <div className="me-auto d-md-flex flex-grow-1">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Search Products"
                                    aria-label="Input group example"
                                    aria-describedby="btnGroupAddon"
                                />
                                <Button variant="secondary">
                                    <i class="fa-solid fa-magnifying-glass fa-1.8x"></i>
                                </Button>
                            </InputGroup>
                        </div>
                        <div className="ms-3 d-md-flex flex-nowrap fw-bold">
                            <Nav className="ms-auto">
                                <Link to='#' className='nav-link'>Sign in</Link>
                                <Link to='#' className='nav-link'><i class="fa-regular fa-bell fa-1.8x"></i></Link>
                                <Link to='/cart' className='nav-link'><i class="fa-solid fa-cart-shopping"></i></Link>
                            </Nav>
                        </div>
                    </div>
                </Container>
            </Navbar>
            <Nav className="justify-content-center mt-3 second-nav bg-body-tertiary mb-5 fw-bold mt-n1">
                <NavLink className='nav-link' to="/drinkware">Drinkware</NavLink>
                <NavLink className='nav-link' to="/kitchenware">Kitchenware</NavLink>
                <NavLink className='nav-link' to="/ecofriendly-bags">Eco-Friendly Bags</NavLink>
            </Nav>
        </Fragment>
        
    );
}
