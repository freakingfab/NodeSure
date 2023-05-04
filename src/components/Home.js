import React, { useState, useEffect } from "react";
import Product from "./Product";
import PaginationBar from "./Pagination";
import ProductDetail from "./ProductDetail";
import { Button, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Data from './Data.json'
const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const productsArray = Object.values(Data);
    console.log(productsArray);
    setProducts(productsArray[0]);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.title || ""; // Set productName to empty string if product name is undefined
    return productName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleProductClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div >
      {selectedProduct == null ? (
        <div style={{ margin: "5% 10%"  }}>
          <div style={{ marginBottom: "2rem" }}>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                style={{
                  width: "50%",
                  height: "3rem",
                  borderRadius: "10px",
                  padding: "10px",
                }}
                placeholder="Search Products"
                value={searchQuery}
                onChange={handleSearch}
              />
              <Button
                variant="secondary"
                id="button-addon2"
                onClick={handleSearch}
              >
                Search
              </Button>
            </InputGroup>
                  </div>
                  <div style={{ display: "flex", flexDirection:"column", alignItems: "center" }}>
                      <Row>
                      {currentProducts.map((product) => (
              <Col xs={12} lg={4} md={6}>
            <Product
              key={product.id}
              product={product}
              onProductClick={handleProductClick}
                              />
                              </Col>
                      ))}
                      </Row>
          <PaginationBar
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
                      />
                      </div>
        </div>
      ) : (
        <ProductDetail product={selectedProduct} onClose={handleProductClose} />
      )}
    </div>
  );
};

export default Home;
