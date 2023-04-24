import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Product = ({ product, onProductClick }) => {
  const handleClick = () => {
    onProductClick(product);
  };

    return (
    <Card style={{ width: '18rem', minHeight:'25rem', background:'var(--navbar-bg)', color:'var(--font-color)', margin:'2rem 2rem'}}>
      <Card.Img variant="top" src={product.thumbnail} style={{width:"17.8rem", height:"12rem", }}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="secondary" onClick={handleClick}>View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
