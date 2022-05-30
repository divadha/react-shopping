import ProductCart from "../components/ProductCart";
import productsData from "../data/ProductsData";
import { Container, Col } from "react-bootstrap";

function CartList() {
  return (
    <>
      <Container>
        {productsData.map((product, key) => (
          <Col>
            <ProductCart
              key={key}
              imageUrl={product.imageUrl}
              price={product.price}
              title={product.title}
              quantity={product.quantity}
              name={product.name}
            />
          </Col>
        ))}
      </Container>
    </>
  );
}

export default CartList;
