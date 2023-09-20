  import React, { useEffect, useState } from 'react'
  import Button from 'react-bootstrap/Button';
  import Card from 'react-bootstrap/Card';
  import axios from 'axios'
  import { Container, Row } from 'react-bootstrap';
  import { useMyContext } from '../../Context';

  const Herosection = () => {

    const {cart , setCart} = useMyContext();
    function addToCart(data){
      setCart([...cart , data]);
    }
    const [myData , setMyData] = useState([]);

    useEffect(()=>{
      axios.get("https://api.pujakaitem.com/api/products")
      .then((res) => setMyData(res.data));
    },[]);
    return (

      <Container className='mt-5'>
        <Row className="justify-content-center gap-3">
          {myData.map((post) => {
            const { id, name, description, image } = post;
            return (
              <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Button onClick={addToCart} variant="primary">Add To Cart</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>

    )
  }

  export default Herosection
