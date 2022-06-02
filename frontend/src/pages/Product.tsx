import { Button, Col, Container, Carousel, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductsData from "../data/ProductsData";
import NotFoundPage from "./NotFoundPage";

function Product() {
  const { name } = useParams();
  const product = ProductsData.find((product) => product.name === name);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <Container>
      <h1>{product.title}</h1>
      <Row>
        <Col>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product.imageUrl}
                alt={product.title}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <Row>Price: $ {product.price}</Row>
          <Row>Discount: $ -10</Row>
          <Row>
            <Button variant="primary">Add to Cart</Button>
          </Row>
        </Col>
      </Row>
      <Row>
        <p>{product.title}</p>
      </Row>
    </Container>
  );
}

export default Product;
