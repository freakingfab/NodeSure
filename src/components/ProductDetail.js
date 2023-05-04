import React from "react";
import { Button, Carousel } from "react-bootstrap";
const ProductDetail = ({ product, onClose }) => {
    const discounted_price = Math.floor(product.price - ((product.price * product.discountPercentage)/100));
    return (
      <div style={{background: "var(--navbar-bg)", margin:"5%", color: "var(--font-color)", borderRadius: "10px", }}>
      <div style={{ display:"flex", flexDirection:"row" }}>
          
          <div style={{ margin: "5%", color:"var(--font-color)"}} className="d-grid gap-2">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p><span style={{ fontWeight: "bolder" }}>Brand: </span>{product.name}</p>
              <p><span style={{ fontWeight: "bolder" }}>Category: </span>{product.username}</p>
              <p><span style={{ fontWeight: "bolder" }}>Stock Available: </span>{product.bio}</p>
                  <p><span style={{ fontWeight: "bolder" }}>Price: Rs </span> {product.repositories}</p>
              <p><span style={{ fontWeight: "bolder" }}>Rating: </span> <span style={{ color: "black", fontWeight: "bolder" }}>{product.fork}</span> / 5.0</p>
              <Button variant="secondary" size="lg">Add to Cart</Button>
          </div>
            </div>
            <Button variant="secondary" size="lg" style={{marginBottom:"20px"}} onClick={onClose}>Back to Products</Button>
            </div>
  );
};

export default ProductDetail;
