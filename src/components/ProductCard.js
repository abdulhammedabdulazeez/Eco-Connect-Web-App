import { Fragment } from 'react';
import React, { useState } from 'react';
import { Card, Button, Modal, ListGroup } from 'react-bootstrap';
import '../css/app.css'

export const ProductCard = ({ name, amount, details, image }) => {

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <Fragment>
            <Card className="mb-3">
                <Card.Img variant="top" src={image} style={{ height: '250px' }} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Amount: {amount}</Card.Text>
                <Button variant="primary" onClick={handleShowModal}>View Details</Button>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={image} alt={name} className="img-fluid mb-3" style={{ width: '200px', height: 'auto' }} />
                    <ListGroup variant="flush">
                        {details.map((detail, index) => (
                            <ListGroup.Item key={index}><i class="fa-regular fa-square-check custom-icon"></i>{detail}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary">Add to Cart</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
