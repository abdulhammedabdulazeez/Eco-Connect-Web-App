import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export const ProductPageBanner = ({ backgroundImage, title, description, backgroundColor, textColor }) => {

    const variantClasses = {
    primary: 'bg-primary',
    light: 'bg-light',
    info: 'bg-info'
    };

    // Determine the background color class based on the prop
    const backgroundColorClass = variantClasses[backgroundColor] || backgroundColor;

    // Style for the text color
    const textStyle = {
        color: textColor || 'inherit' // Default to inherit if no textColor prop is provided
    };
    


    const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    };


    return (
        <section  className={`${backgroundColorClass} mt-5`}>
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <div className='p-5' style={textStyle}>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div style={sectionStyle} className='h-100'></div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
