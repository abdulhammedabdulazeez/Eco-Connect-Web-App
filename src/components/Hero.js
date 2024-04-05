import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { heroData } from './HeroData'
import '../css/app.css'

export const Hero = () => {
    return (
        <section>
            <Container fluid>
                <Carousel fade>
                    {
                        heroData.map(hero => {
                        return (
                            <Carousel.Item key={hero.id}>
                            <img
                                className="d-block w-100"
                                src={hero.image}
                                alt={"slide " + hero.id}
                            />
                            <Carousel.Caption className='mb-5 me-auto'>
                                <h2>{hero.title}</h2>
                                <p>{hero.description}</p>
                                <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                            </Carousel.Caption>             
                            </Carousel.Item>
                        );
                        })
                    }
                </Carousel>
            </Container>
        </section>
    )
}

