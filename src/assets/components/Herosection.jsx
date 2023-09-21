  import React, { useContext, useEffect, useState } from 'react'
  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import { Container, Row } from 'react-bootstrap';
  import { CartItemsContext } from '../../Context';
import { Link } from 'react-router-dom';

  const Herosection = () => {

    const {incrementQuantity , fetchproduct , myData} = useContext(CartItemsContext)

    const addToCartHandler = () => {
      incrementQuantity();
    }
    
    useEffect(()=>{
      fetchproduct();
    },[]);
    return (

      <Container className='mt-5'>
        <Row className="justify-content-center gap-3">
          {myData.map((post) => {
            const { id, name, description, image } = post;
            // let titleSlug = name.replace(/\s+/g, '-').toLowerCase();
            return (
              <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Link to={`/Singleproduct/${id}`}><Card.Title>{name}</Card.Title></Link>
                  <Card.Text>{description}</Card.Text>
                  <Button onClick={addToCartHandler} variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>

    )
  }

  export default Herosection
