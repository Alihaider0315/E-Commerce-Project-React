import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartItemsContext } from './Context';

const Singleproduct = () => {
  const {myData } = useContext(CartItemsContext);
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const productData = myData.find(item => item.id === id);
    setProduct(productData);
  }, [id, myData]);

  return (
    <div>
      {product ? (
        <div>
          <h1>Product Title: {product.name}</h1>
          <h4>Product Description : {product.description}</h4>
          <img src={product.image}/>
          <h6>Price {product.price}</h6>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Singleproduct;