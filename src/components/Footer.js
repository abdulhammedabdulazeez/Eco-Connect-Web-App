import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/app.css'

export const Footer = () => {
    return (
        <Fragment>
            <footer className='custom-container'>
                <Container fluid className='bg-primary p-5'>
                    <div className='text-white' style={{ height: '150px' }}>
                        <Row>
                            <Col>
                                <h5>Coming Soon</h5>
                                <p>More features will be added later.</p>
                            </Col>
                            <Col>
                                <h5>Social Media</h5>
                                <div>
                                    <a href="https://www.instagram.com/">
                                        <i class="fa-brands fa-square-instagram fa-2x"></i>
                                    </a>
                                    <a href="https://www.facebook.com/">
                                        <i class="fa-brands fa-square-facebook fa-2x"></i>
                                    </a>
                                    <a href="https://www.twitter.com/">
                                        <i class="fa-brands fa-square-x-twitter fa-2x"></i>
                                    </a>
                                </div>
                            </Col>
                            <Col>
                                <h5>Product Pages</h5>
                                <ul>
                                    <li><Link to="/drinkware">Drink Ware</Link></li>
                                    <li><Link to="/kitchenware">Kitchen Ware</Link></li>
                                    <li><Link to="/ecofriendly-bags">Eco-friendly Bags</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </footer>
        </Fragment>
    )
}
