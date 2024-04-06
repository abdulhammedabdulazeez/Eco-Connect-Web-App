import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ProductCard } from './ProductCard'

export const ProductsBox = ({ products }) => {

    

    return (
        <section className='mt-5 mb-5'>
            <Container>
                <div className='bg-light text-center p-5'>
                    <h2 className='mb-5'>Product List</h2>
                    <Row xs={1} sm={2} md={3} lg={3} xl={3} className="g-4">
                        {products.map(product => (
                            <Col key={product.id}>
                                <ProductCard {...product} />
                            </Col>
                        ))}
                    </Row>
                    
                </div>
            </Container>
        </section>
    )
}
