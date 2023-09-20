import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row } from 'react-bootstrap';
import { useMyContext } from './Context';

const Cart = () => {
  const { cart } = useMyContext();
  return (
    <Container className='mt-5'>
      <Row className="justify-content-center gap-3">
        {cart.map((item) => {
          const { productID, productName, productDescription, productImage } = item;
          return (
            <Card style={{ width: '18rem' }} key={productID}>
              <Card.Img variant="top" src={productImage} />
              <Card.Body>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>{productDescription}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
}

export default Cart;
