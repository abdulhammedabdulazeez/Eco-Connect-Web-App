import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../css/app.css'

export const OurStorySection = () => {
    return (
        <Fragment>
            <section id='our-story' className='mt-5 our-story'>
                <Container fluid className='p-5 bg-light'> 
                    <div className='d-flex flex-column align-items-center hstack gap-3'>
                        <h2>What is <span className='text-primary'>Eco</span>Connect?</h2>
                        <Row className='custom-line-height fw-light text-center'>
                            <Col className='md-4'>
                                <h3>Celebrating Eco-Makers</h3>
                                <div className='p-3 bg-light custom-shadow'>
                                    <p>
                                        At EcoConnect, we're passionate about supporting independent creators who are
                                        committed to crafting eco-friendly products. Our platform showcases a diverse array of
                                        sustainable goods, from handmade treasures to innovative solutions for green living.
                                    </p>
                                </div>
                            </Col>
                            <Col className='md-4'>
                                <h3>Environmental Impact</h3>
                                <div className='p-3 bg-light custom-shadow'>
                                    <p>
                                        We take pride in our eco-conscious approach. By promoting sustainable practices and eco-friendly products,
                                        we're contributing to a healthier planet and a brighter future for generations to come.
                                    </p>
                                </div>
                            </Col>
                            <Col className='md-4'>
                                <h3>Community Support</h3>
                                <div className='p-3 bg-light custom-shadow'>
                                    <p>
                                        Your satisfaction and peace of mind are our top priorities. Our dedicated team is always here to
                                        provide assistance and ensure that your experience with EcoConnect is seamless and enjoyable.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </Fragment>
    )
}
