import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ProductCard } from './ProductCard'

export const ProductsBox = () => {

    const products = [
        { id: 1, name: 'Product 1', amount: 10.99, details: 'Product 1 details...', image: 'https://example.com/product1.jpg' },
        { id: 2, name: 'Product 2', amount: 20.99, details: 'Product 2 details...', image: 'https://example.com/product2.jpg' },
        { id: 3, name: 'Product 3', amount: 15.99, details: 'Product 3 details...', image: 'https://example.com/product3.jpg' },
        { id: 4, name: 'Product 4', amount: 25.99, details: 'Product 4 details...', image: 'https://example.com/product4.jpg' },
        // Add more products as needed
];

    return (
        <section className='mt-5 mb-5'>
            <Container>
                <div className='bg-light text-center p-5'>
                    <h2 className='mb-2'>Product List</h2>
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
