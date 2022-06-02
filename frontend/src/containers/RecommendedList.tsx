import ProductCard from "../components/ProductCard";
import productsData from "../data/ProductsData";
import { Container, Col, Row } from "react-bootstrap";

function RecommendedList() {
  return (
    <>
      <h1>Recommended</h1>
      <Container>
        <Row xs={2} md={3} lg={4}>
          {productsData.map((product, key) => (
            <Col>
              <ProductCard
                key={key}
                imageUrl={product.imageUrl}
                title={product.title}
                price={product.price}
                name={product.name}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default RecommendedList;
