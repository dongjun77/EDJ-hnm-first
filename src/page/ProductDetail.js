import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          <h6>{product?.choice ? "Conscious choice" : ""}</h6>
          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="danger">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
