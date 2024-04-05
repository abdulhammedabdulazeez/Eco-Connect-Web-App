import { Fragment } from 'react';
import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

export const ProductCard = ({ name, amount, details, image }) => {

    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <Fragment>
            <Card className="mb-3">
                <Card.Img variant="top" src={image} />
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
                <img src={image} alt={name} className="img-fluid mb-3" />
                <p>{details}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                <Button variant="primary">Add to Cart</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}
