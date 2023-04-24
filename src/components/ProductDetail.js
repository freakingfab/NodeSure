import React from "react";
import { Button, Carousel } from "react-bootstrap";
const ProductDetail = ({ product, onClose }) => {
    const discounted_price = Math.floor(product.price - ((product.price * product.discountPercentage)/100));
    return (
      <div style={{background: "var(--navbar-bg)", margin:"5%", color: "var(--font-color)", borderRadius: "10px", }}>
      <div style={{ display:"flex", flexDirection:"row" }}>
          <div style={{width:"50%", height:"25rem", border:"1px solid var(--font-color)", margin:"5%", borderRadius:"10px"}}>
              <Carousel variant="dark" interval={2000}>
                  {
                      product.images.map((url) => (
                          <Carousel.Item>
                              <img src={url} alt={product.title} style={{ height: "23rem", width: "80%", margin:"1rem 0"}}></img>
                          </Carousel.Item>
                      ))
                  }
              </Carousel>
          </div>
          <div style={{ margin: "5%", color:"var(--font-color)"}} className="d-grid gap-2">
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <p><span style={{ fontWeight: "bolder" }}>Brand: </span>{product.brand}</p>
              <p><span style={{ fontWeight: "bolder" }}>Category: </span>{product.category}</p>
              <p><span style={{ fontWeight: "bolder" }}>Stock Available: </span>{product.stock}</p>
                  <p><span style={{ fontWeight: "bolder" }}>Price: Rs </span> <span style={{ color: "red", textDecoration: "line-through", fontWeight: "bolder" }}>{product.price}</span> <span style={{ color: "green", fontWeight: "bolder" }}>{discounted_price} </span></p>
              <p><span style={{ fontWeight: "bolder" }}>Rating: </span> <span style={{ color: "black", fontWeight: "bolder" }}>{product.rating}</span> / 5.0</p>
              <Button variant="secondary" size="lg">Add to Cart</Button>
          </div>
            </div>
            <Button variant="secondary" size="lg" style={{marginBottom:"20px"}} onClick={onClose}>Back to Products</Button>
            </div>
  );
};

export default ProductDetail;
